import { weatherCodes } from "../constants/weatherCodesConstants";

export interface DailyShortProps {
  dayData: {
    date: string | undefined;
    temperature: number;
    weatherCode: keyof typeof weatherCodes;
    apparentTemperature: number;
    sunrise: string;
    sunset: string;
    precipitation: number;
    windSpeed: number;
    windDirection: number;
  };
}
