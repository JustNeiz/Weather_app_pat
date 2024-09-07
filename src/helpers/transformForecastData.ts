import { DateInput, format } from "@formkit/tempo";
import { IDailyForecastResponse } from "../types/IDailyForecastResponse.ts";

interface TransformedForecast {
  date: string;
  time: string;
  temperature_2m: number;
  weather_code: string;
  relative_humidity_2m: number;
  apparent_temperature: number;
  precipitation_probability: number;
  wind_speed_10m: number;
  wind_direction_10m: number;
  surface_pressure: number;
}

export const transformForecastData = (data: IDailyForecastResponse | undefined): TransformedForecast[] => {
  if (!data || !data.hourly) return [];

  return data?.hourly?.time?.map((time: DateInput, index: number) => ({
    date: format(time, "DD.MM.YYYY"),
    time: format(time, "HH:mm"),
    temperature_2m: data.hourly.temperature_2m[index],
    weather_code: `${data.hourly.weather_code[index]}`,
    relative_humidity_2m: data.hourly.relative_humidity_2m[index],
    apparent_temperature: data.hourly.apparent_temperature[index],
    precipitation_probability: data.hourly.precipitation_probability[index],
    wind_speed_10m: data.hourly.wind_speed_10m[index],
    wind_direction_10m: data.hourly.wind_direction_10m[index],
    surface_pressure: data.hourly.surface_pressure[index],
  }));
};
