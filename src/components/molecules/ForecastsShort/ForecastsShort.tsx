import { Flex, Loader, ScrollArea } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { forecastService } from "../../../services/forecastService";
import { useForecastDuration } from "../../../store/useForecastDuration";
import { useCoordinates } from "../../../store/useCoordinates";
import DailyForecastShortCard from "../DailyForecastShortCard/DailyForecastShortCard";
import { IWeeklyResponse } from "../../../types/IWeeklyRespone";
import { useCurrentDay } from "../../../store/useCurrentDay";
import DailyForecastFullCard from "../DailyForecastFullCard/DailyForecastFullCard";
import { useCurrentCity } from "../../../store/useCurrentCity.ts";
import { transformWeeklyForecast } from "../../../helpers/transformWeeklyForecast.ts";

const ForecastsShort = () => {
  const { coordinates } = useCoordinates();
  const { intervalStart, intervalEnd } = useForecastDuration();
  const { currentDay } = useCurrentDay();
  const { city } = useCurrentCity();

  const isQueryEnabled = coordinates && intervalEnd;

  const { data, isLoading } = useQuery<IWeeklyResponse>({
    queryKey: ["weeklyForecast", coordinates, intervalEnd, intervalStart, city],
    queryFn: () =>
      forecastService(
        intervalStart as string,
        intervalEnd as string,
        coordinates,
      ),
    enabled: !!isQueryEnabled,
  });

  const transformedData = transformWeeklyForecast(data);

  if (isLoading) {
    return <Loader color="gray" size="xl" type="dots"  w={'100%'}/>;
  }

  return (
    <ScrollArea w={'100%'}>
    <Flex justify="space-between" w={'100%'}>
      {transformedData.map((dayData, index) => (
        dayData.date === currentDay ? (
          <DailyForecastFullCard key={index} dayData={dayData} />
        ) : (
          <DailyForecastShortCard key={index} dayData={dayData} />
        )
      ))}
    </Flex>
    </ScrollArea>

  );
};

export default ForecastsShort;
