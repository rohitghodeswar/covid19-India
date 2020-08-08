import React, { useEffect } from "react";

//components
import CovidCardComponent from "../components/CovidCardComponent";
import CovidIndiaTestCard from "../components/CovidIndiaTestCard";
import CovidLogList from "../components/CovidLogList";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchCovidStateWiseAction,
  fetchLogAction,
} from "../middleware/covid-middleware";

const CovidIndiaComponent = () => {
  const dispatch = useDispatch();
  const { stateWiseData, testData } = useSelector(
    (state) => state.covidStateWiseReducer
  );

  const { logData } = useSelector((state) => state.covidLogReducer);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchCovidStateWiseAction());
    dispatch(fetchLogAction());
  }, [dispatch]);

  return (
    <React.Fragment>
      {stateWiseData && stateWiseData.length > 0 && (
        <CovidCardComponent
          locationValue={[
            {
              state: "Total",
            },
          ]}
          covidData={stateWiseData}
          cardType="india"
        />
      )}
      {testData && testData.length > 0 && (
        <CovidIndiaTestCard covidTestData={testData} />
      )}
      {logData && logData.length > 0 && (
        <CovidLogList logData={logData.reverse()} />
      )}
    </React.Fragment>
  );
};

export default CovidIndiaComponent;
