import { Flex, ScrollArea } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { dailyForecastService } from "../../../services/dailyForecastService.ts";
import { useCoordinates } from "../../../store/useCoordinates.ts";
import { useForecastDuration } from "../../../store/useForecastDuration.ts";
import { IDailyForecastResponse } from "../../../types/IDailyForecastResponse.ts";
import { format } from "@formkit/tempo";
import HourlyShortCard from "../HourlyShortCard/HourlyShortCard.tsx";
import { useCurrentTime } from "../../../store/useCurrentTime.ts";
import HourlyFullCard from "../HourlyFullCard.tsx";
import { useCurrentCity } from "../../../store/useCurrentCity.ts";

const DailyForecast = () => {
  const { coordinates } = useCoordinates();
  const { intervalStart, intervalEnd } = useForecastDuration();
  const isQueryEnabled = coordinates && intervalEnd;
  const { time } = useCurrentTime();
  const { city } = useCurrentCity();

  const { data } = useQuery<IDailyForecastResponse>({
    queryKey: ["dailyForecast", intervalEnd, intervalStart, coordinates, city],
    queryFn: () =>
      dailyForecastService(
        intervalStart as string,
        intervalEnd as string,
        coordinates,
      ),
    enabled: !!isQueryEnabled,
  });
  console.log(data);
  const formattedTimesArray = data?.hourly.time.map((time) =>
    format(time, "HH:mm"),
  );
  const formattedDatesArray = data?.hourly.time.map((date) =>
    format(date, "DD.MM.YYYY"),
  );
  console.log(formattedDatesArray);

  return (
    <ScrollArea scrollbars="x" w="100%">
      <Flex justify="space-between">
        {data?.hourly?.time?.map((date, index) => {
          const hourData = {
            date: formattedDatesArray?.[index] as string,
            time: formattedTimesArray?.[index] as string,
            temperature_2m: data?.hourly?.temperature_2m[index],
            weather_code: `${data?.hourly?.weather_code[index]}`,
            relative_humidity_2m: data?.hourly.relative_humidity_2m[index],
            apparent_temperature: data?.hourly?.apparent_temperature[index],
            precipitation_probability:
              data?.hourly?.precipitation_probability[index],
            wind_speed_10m: data?.hourly?.wind_speed_10m[index],
            wind_direction_10m: data?.hourly?.wind_direction_10m[index],
            surface_pressure: data?.hourly?.surface_pressure[index],
          };

          return formattedTimesArray?.[index] === time ? (
            <HourlyFullCard key={date} hourlyProps={hourData} />
          ) : (
            <HourlyShortCard key={date} hourlyProps={hourData} />
          );
        })}
      </Flex>
    </ScrollArea>
  );
};

export default DailyForecast;
