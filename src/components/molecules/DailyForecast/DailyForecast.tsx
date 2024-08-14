import { Flex, ScrollArea } from "@mantine/core";
import {useQuery} from "@tanstack/react-query";
import {forecastService} from "../../../services/dailyForecastService.ts";

const DailyForecast = () => {
  const {data} = useQuery({
    queryKey: ['dailyForecast'],
    queryFn: () => forecastService.
  });

  return (
    <ScrollArea scrollbars='x'>

    </ScrollArea>
  );
};

export default DailyForecast;