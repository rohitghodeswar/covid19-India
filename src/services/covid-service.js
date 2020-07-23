import service from "../api/http-methods";

export const getCovidData = () => {
  return service.get("/v2/state_district_wise.json");
};

export const getCovidResourseData = () => {
  return service.get("/resources/resources.json");
};

export const getCovidZoneData = () => {
  return service.get("/zones.json");
};

export const getCovidStateWiseData = () => {
  return service.get("/data.json");
};