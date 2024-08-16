import { forecastApi } from "./apiService.ts";
import { format } from "@formkit/tempo";
import { ICoordinates } from "../types/ICoordinates.ts";

const generateUrl = (
  durationStart: string,
  durationEnd: string,
  coordinates: ICoordinates,
): string => {
  const startFormatted = format(durationStart, "YYYY-MM-DD", "en");
  const endFormatted = format(durationEnd, "YYYY-MM-DD", "en");

  return `?latitude=${coordinates.lattitude}&longitude=${coordinates.longitude}&daily=weather_code,temperature_2m_max,apparent_temperature_max,sunrise,sunset,precipitation_probability_max,wind_speed_10m_max,wind_direction_10m_dominant&timezone=auto&start_date=${startFormatted}&end_date=${endFormatted}`;
};
export const forecastService = async (
  durationStart: string,
  durationEnd: string,
  coordinates: ICoordinates,
) => {
  const response = await forecastApi.get(
    generateUrl(durationStart, durationEnd, coordinates),
  );
  return response.data;
};
