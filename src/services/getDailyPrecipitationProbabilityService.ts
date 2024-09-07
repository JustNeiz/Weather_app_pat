import { ICoordinates } from "../types/ICoordinates.ts";
import { forecastApi } from "./apiService.ts";

export const getDailyPrecipitationProbabilityService = async (
  coordinates: ICoordinates,
) => {
  const response = await forecastApi(
    `?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&hourly=precipitation_probability&timezone=auto&forecast_days=1`,
  );
  return response.data;
};
