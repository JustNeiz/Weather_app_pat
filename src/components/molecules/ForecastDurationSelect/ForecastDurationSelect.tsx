import { Tabs, Text } from "@mantine/core";
import css from "./ForecastDuration.module.css";
import { useForecastDuration } from "../../../store/useForecastDuration";
import { format } from "@formkit/tempo";

const ForecastDurationSelect = () => {
  const { intervalEnd, setDuration } = useForecastDuration();
  const today = new Date();
  const tomorrow = new Date();
  const weekly = new Date();

  tomorrow.setDate(today.getDate() + 1);
  weekly.setDate(today.getDate() + 6);

  const todayFormatted = format(today, "YYYY-MM-DD", "en");
  const tomorrowFormatted = format(tomorrow, "YYYY-MM-DD", "en");
  const weeklyFormatted = format(weekly, "YYYY-MM-DD", "en");

  return (
    <Tabs
      value={intervalEnd}
      onChange={setDuration}
      c="#a9a9a9"
      classNames={css}
      variant="unstyled"
    >
      <Tabs.List>
        <Tabs.Tab value={todayFormatted}>
          <Text fw={700}>Today</Text>{" "}
        </Tabs.Tab>

        <Tabs.Tab value={tomorrowFormatted}>
          <Text fw={700}>Tomorrow</Text>
        </Tabs.Tab>

        <Tabs.Tab value={weeklyFormatted}>
          <Text fw={700}>Next 7 days</Text>
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};

export default ForecastDurationSelect;
