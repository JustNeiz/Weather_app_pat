import { format } from "@formkit/tempo";
import { ICoordinates } from "../types/ICoordinates.ts";
import { forecastApi } from "./apiService";

const generateUrl = (
  durationStart: string,
  durationEnd: string,
  coordinates: ICoordinates,
): string => {
  const startFormatted = format(durationStart, "YYYY-MM-DD", "en");
  const endFormatted = format(durationEnd, "YYYY-MM-DD", "en");

  return `?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}8&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m&timezone=auto&start_date=${startFormatted}&end_date=${endFormatted}`;
};
export const dailyForecastService = async (
  durationStart: string,
  durationEnd: string,
  coordinates: ICoordinates,
) => {

  const response = await forecastApi.get(
    generateUrl(durationStart, durationEnd, coordinates),
  );
  return response.data;
};
