import axios from "axios";

export default axios.create({
  // baseURL: "https://jsonplaceholder.typicode.com",
  baseURL: "https://data.covid19india.org",
  headers: {
    "Content-type": "application/json",
  },
});
