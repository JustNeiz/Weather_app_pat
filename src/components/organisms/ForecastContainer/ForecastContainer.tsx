import { Flex } from "@mantine/core";
import ForecastDurationSelect from "../../molecules/ForecastDurationSelect/ForecastDurationSelect";
import ForecastsShort from "../../molecules/ForecastsShort/ForecastsShort";
import { useForecastDuration } from "../../../store/useForecastDuration";
import DailyForecast from "../../molecules/DailyForecast/DailyForecast";

const ForecastContainer = () => {
  const { intervalEnd, intervalStart } = useForecastDuration();
  return (
    <Flex direction="column">
      <ForecastDurationSelect />
      {intervalEnd === intervalStart ? <DailyForecast /> : <ForecastsShort />}
    </Flex>
  );
};

export default ForecastContainer;
