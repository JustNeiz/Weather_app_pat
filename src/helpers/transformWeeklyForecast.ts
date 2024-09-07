import { format, parse, DateInput } from "@formkit/tempo";
import { IWeeklyResponse } from "../types/IWeeklyRespone.ts";

interface TransformedDayData {
  date: string;
  temperature: number;
  weatherCode: number;
  apparentTemperature: number;
  sunrise: string;
  sunset: string;
  precipitation: number;
  windSpeed: number;
  windDirection: number;
}

export const transformWeeklyForecast = (data: IWeeklyResponse | undefined): TransformedDayData[] => {
  if (!data || !data.daily) return [];

  return data.daily.time.map((date: string, index: number) => {
    const parsedDate = parse(date, "YYYY-MM-DD", "en");
    const formattedDate = format(parsedDate as DateInput, "ddd DD MMM", "en");

    return {
      date: formattedDate,
      temperature: data.daily.temperature_2m_max[index],
      weatherCode: data.daily.weather_code[index],
      apparentTemperature: data.daily.apparent_temperature_max[index],
      sunrise: data.daily.sunrise[index],
      sunset: data.daily.sunset[index],
      precipitation: data.daily.precipitation_probability_max[index],
      windSpeed: data.daily.wind_speed_10m_max[index],
      windDirection: data.daily.wind_direction_10m_dominant[index],
    };
  });
};
