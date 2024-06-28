import axios from "axios";
import {baseURL} from "../constants/constants.ts";

export const apiService = axios.create({
    baseURL: baseURL,
    responseType: "json",
    headers: {
        Accept: "application/json",
    },
})