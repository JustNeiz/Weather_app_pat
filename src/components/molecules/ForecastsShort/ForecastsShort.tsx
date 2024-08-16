import { Flex } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { forecastService } from "../../../services/forecastService";
import { useForecastDuration } from "../../../store/useForecastDuration";
import { useCoordinates } from "../../../store/useCoordinates";
import DailyForecastShortCard from "../DailyForecastShortCard/DailyForecastShortCard";
import { format, parse } from "@formkit/tempo";
import { IWeeklyResponse } from "../../../types/IWeeklyRespone";
import { useCurrentDay } from "../../../store/useCurrentDay";
import DailyForecastFullCard from "../DailyForecastFullCard/DailyForecastFullCard";
import { useCurrentCity } from "../../../store/useCurrentCity.ts";

const ForecastsShort = () => {
  const { coordinates } = useCoordinates();
  const { intervalStart, intervalEnd } = useForecastDuration();
  const isQueryEnabled = coordinates && intervalEnd;
  const { currentDay } = useCurrentDay();
  const { city } = useCurrentCity();

  const { data } = useQuery<IWeeklyResponse>({
    queryKey: ["weeklyForecast", coordinates, intervalEnd, intervalStart, city],
    queryFn: () =>
      forecastService(
        intervalStart as string,
        intervalEnd as string,
        coordinates,
      ),
    enabled: !!isQueryEnabled,
  });

  const formattedDatesArray = data?.daily?.time?.map((item) => {
    const parsedDate = parse(item, "YYYY-MM-DD", "en");
    return format(parsedDate, "ddd DD MMM", "en");
  });

  return (
    <Flex justify="space-between">
      {data?.daily?.time?.map((date, index) => {
        const dayData = {
          date: formattedDatesArray?.[index] as string,
          temperature: data?.daily?.temperature_2m_max[index],
          weatherCode: data?.daily?.weather_code[index],
          apparentTemperature: data?.daily?.apparent_temperature_max[index],
          sunrise: data?.daily?.sunrise[index],
          sunset: data?.daily?.sunset[index],
          precipitation: data?.daily?.precipitation_probability_max[index],
          windSpeed: data?.daily?.wind_speed_10m_max[index],
          windDirection: data?.daily?.wind_direction_10m_dominant[index],
        };

        return formattedDatesArray?.[index] === currentDay ? (
          <DailyForecastFullCard key={date} dayData={dayData} />
        ) : (
          <DailyForecastShortCard key={date} dayData={dayData} />
        );
      })}
    </Flex>
  );
};

export default ForecastsShort;
