import { OtherCitiesResponse } from "../types/OtherCitiesResponse.ts";
import { ICityCoordinates } from "../types/ICityCoordinates.ts";

interface TransformedCityData {
  city: string;
  temperature_2m: string;
  weather_code: string;
  latitude: string;
  longitude: string;
}

export const transformOtherCitiesData = (
  data: OtherCitiesResponse[] | undefined,
  citiesHistoryArray: ICityCoordinates[]
): TransformedCityData[] => {
  if (!data || !citiesHistoryArray.length) return [];

  return data.map((cityData, index) => ({
    city: citiesHistoryArray[index]?.city || "",
    temperature_2m: `${cityData.current.temperature_2m}`,
    weather_code: `${cityData.current.weather_code}`,
    latitude: `${cityData.latitude}`,
    longitude: `${cityData.longitude}`,
  }));
};
