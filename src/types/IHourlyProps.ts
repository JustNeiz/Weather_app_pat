import { weatherCodes } from "../constants/weatherCodesConstants.ts";

export interface IHourlyProps {
  hourlyProps: {
    date: string;
    time: string;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    precipitation_probability: number;
    weather_code: keyof typeof weatherCodes;
    surface_pressure: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
  };
}
