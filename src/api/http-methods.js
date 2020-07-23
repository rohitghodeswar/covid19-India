import axios from "./http-common";

const service = {
  get(url) {
    return axios.get(url);
  },
  post(url, data) {
    return axios.post(url, data);
  },
  put(url, data) {
    return axios.put(url, data);
  },
  delete(url) {
    return axios.delete(url);
  },
}

export default service;
