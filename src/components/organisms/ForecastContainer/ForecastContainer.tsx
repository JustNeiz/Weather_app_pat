import { Flex } from "@mantine/core";
import ForecastsShort from "../../molecules/ForecastsShort/ForecastsShort";
import { useForecastDuration } from "../../../store/useForecastDuration";
import DailyForecast from "../../molecules/DailyForecast/DailyForecast";
import ForecastDurationSelect from "../../molecules/ForecastDurationSelect/ForecastDurationSelect.tsx";

const ForecastContainer = () => {
  const { intervalEnd, intervalStart } = useForecastDuration();

  return (
    <Flex direction="column" w={'100%'} pb={10} style={{border: '1px lightgrey solid',
      borderRadius: '10px'}}>
      <ForecastDurationSelect/>
      {intervalEnd === intervalStart ? <DailyForecast /> : <ForecastsShort />}
    </Flex>
  );
};

export default ForecastContainer;
