import React, { useEffect } from "react";

//components
import CovidCardComponent from "../components/CovidCardComponent";

import { useSelector, useDispatch } from "react-redux";
import { fetchCovidStateWiseAction } from "../middleware/covid-middleware";

const CovidIndiaComponent = () => {
  const dispatch = useDispatch();
  const { stateWiseData } = useSelector((state) => state.covidStateWiseReducer);
  useEffect(() => {
    dispatch(fetchCovidStateWiseAction());
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
    </React.Fragment>
  );
};

export default CovidIndiaComponent;
