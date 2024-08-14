import axios from "axios";
import {cityUrl, forecastUrl} from "../constants/constants.ts";

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
        Accept: "application/json"
    }
})
export {
    forecastApi,
    cityApi
}