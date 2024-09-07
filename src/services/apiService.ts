import axios from "axios";
import { cityUrl, forecastUrl, otherCitiesURl } from "../constants/constants.ts";

const forecastApi = axios.create({
  baseURL: forecastUrl,
  responseType: "json",
  headers: {
    Accept: "application/json",
  },
});
const cityApi = axios.create({
  baseURL: cityUrl,
  responseType: "json",
  headers: {
    Accept: "application/json",
  },
});
const otherCitiesApi = axios.create({
  baseURL: otherCitiesURl,
  responseType: "json",
  headers:{
    Accept: "application/json",
    // 'x-api-key': 'mNRXqAjnHiZ8i7bcUdqojg==8OJnbO3YDnqhrNQW'

  }
})

export { forecastApi, cityApi, otherCitiesApi };
