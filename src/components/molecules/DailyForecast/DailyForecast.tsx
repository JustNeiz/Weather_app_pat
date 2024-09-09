import { useRef, useEffect } from "react";
import { Flex, ScrollArea, Loader, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { dailyForecastService } from "../../../services/dailyForecastService.ts";
import { useCoordinates } from "../../../store/useCoordinates.ts";
import { useForecastDuration } from "../../../store/useForecastDuration.ts";
import { IDailyForecastResponse } from "../../../types/IDailyForecastResponse.ts";
import HourlyShortCard from "../HourlyShortCard/HourlyShortCard.tsx";
import { useCurrentTime } from "../../../store/useCurrentTime.ts";
import HourlyFullCard from "../HourlyFullCard/HourlyFullCard.tsx";
import { useCurrentCity } from "../../../store/useCurrentCity.ts";
import { transformForecastData } from "../../../helpers/transformForecastData.ts";

const DailyForecast = () => {
  const { coordinates } = useCoordinates();
  const { intervalStart, intervalEnd } = useForecastDuration();
  const { time } = useCurrentTime();
  const { city } = useCurrentCity();
  const isQueryEnabled = coordinates && intervalEnd;

  const { data, isLoading } = useQuery<IDailyForecastResponse>({
    queryKey: ["dailyForecast", intervalEnd, intervalStart, coordinates, city],
    queryFn: () =>
      dailyForecastService(
        intervalStart as string,
        intervalEnd as string,
        coordinates,
      ),
    enabled: !!isQueryEnabled,
  });

  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const hourlyFullCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (data && time && scrollAreaRef.current && hourlyFullCardRef.current) {
      hourlyFullCardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  }, [data, time]);

  if (isLoading) {
    return <Loader color="gray" size="xl" type="dots" w={"100%"} />;
  }

  const transformedData = transformForecastData(data);

  return (
    <ScrollArea scrollbars="x" w="100%" ref={scrollAreaRef}>
      <Flex justify="space-between">
        {transformedData.length === 0 ? (
          <Text>No data</Text>
        ) : (
          transformedData.map((hourData, index) =>
            hourData.time === time ? (
              <div ref={hourlyFullCardRef} key={index}>
                <HourlyFullCard hourlyProps={hourData} />
              </div>
            ) : (
              <HourlyShortCard key={index} hourlyProps={hourData} />
            ),
          )
        )}
      </Flex>
    </ScrollArea>
  );
};

export default DailyForecast;
