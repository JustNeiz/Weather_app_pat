import { Flex, Image, Text } from "@mantine/core";
import { IHourlyProps } from "../../../types/IHourlyProps.ts";
import { useCurrentTime } from "../../../store/useCurrentTime.ts";
import { weatherCodes } from "../../../constants/weatherCodesConstants.ts";

const HourlyShortCard: React.FC<IHourlyProps> = ({ hourlyProps }) => {
  const { temperature_2m, weather_code, time } = hourlyProps;
  const { setTime } = useCurrentTime();
  let imagePath = "";
  if (weather_code in weatherCodes) {
    imagePath = weatherCodes[weather_code];
  }

  return (
    <Flex
      w={100}
      h={200}
      justify="space-between"
      align="center"
      bg="#1B1B1D"
      direction="column"
      m={5}
      py={10}
      style={{
        borderRadius: 20,
        cursor: 'pointer'
      }}
      onClick={() => setTime(time)}
    >
      <Text c="white" fz={22} ta="center" lh={1} fw={700} m={5}>
        {time} <br />
      </Text>
      <Image src={imagePath} w={50} h={50} alt={"image"} />
      <Text c="white" fz={22} ta="center" lh={1} fw={700} m={5}>
        {~~temperature_2m}°С
      </Text>
    </Flex>
  );
};

export default HourlyShortCard;
