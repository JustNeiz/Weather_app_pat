import { forecastApi } from "./apiService.ts";

export const otherCitiesService = async (
  latitudes: string,
  longitudes: string,
) => {
  const response = await forecastApi.get(
    `?latitude=${latitudes}&longitude=${longitudes}&current=temperature_2m,weather_code&timezone=auto&forecast_days=1`,
  );
  return response.data;
};
