import { Flex, Image, Text } from "@mantine/core";
import { weatherCodes } from "../../../constants/weatherCodesConstants";
import { DailyShortProps } from "../../../types/DailyShortProps";
import { useCurrentDay } from "../../../store/useCurrentDay";
const DailyForecastShortCard: React.FC<DailyShortProps> = ({ dayData }) => {
  const { setCurrentDay } = useCurrentDay();
  const { date, weatherCode, temperature } = dayData;
  let imagePath = "";
  if (weatherCode in weatherCodes) {
    imagePath = weatherCodes[weatherCode];
  }

  console.log("full", date);

  return (
    <Flex
      w={100}
      h={200}
      justify="space-between"
      align="center"
      direction="column"
      bg="#1B1B1D"
      m={5}
      style={{
        borderRadius: 20,
      }}
      onClick={() => setCurrentDay(date as string)}
    >
      <Text c="white" fz={22} ta="center" lh={1} fw={700} m={5}>
        {date} <br />
      </Text>
      <Image src={imagePath} w={50} h={50} />
      <Text c="white" fz={22} ta="center" lh={1} fw={700} m={5}>
        {~~temperature}°С
      </Text>
    </Flex>
  );
};

export default DailyForecastShortCard;
