import { Flex, Image, Text } from "@mantine/core";
import { IOtherCityProps } from "../../../types/IOtherCityProps.ts";
import { weatherCodes } from "../../../constants/weatherCodesConstants.ts";
import { useCurrentCity } from "../../../store/useCurrentCity.ts";
import { useCoordinates } from "../../../store/useCoordinates.ts";

const OtherCityCard: React.FC<IOtherCityProps> = (otherCityProps) => {
  const { city, temperature_2m, weather_code, longitude, latitude } =
    otherCityProps;
  let imagePath = "";
  if (weather_code in weatherCodes) {
    imagePath = weatherCodes[weather_code];
  }
  const newCoordinates = {
    longitude: +longitude,
    lattitude: +latitude,
  };

  const { setCity } = useCurrentCity();
  const { setCoordinates } = useCoordinates();
  const handleClick = () => {
    setCity(city);
    setCoordinates(newCoordinates);
  };
  return (
    <Flex
      w={"100%"}
      c={"white"}
      bg="#1B1B1D"
      mt={15}
      p={10}
      style={{
        borderRadius: 20,
      }}
      justify={"space-between"}
      align={"center"}
      onClick={handleClick}
    >
      <Flex>
        <Text fw={600} fz={24}>
          {city}
        </Text>
      </Flex>
      <Flex direction={"column"}>
        <Image src={imagePath} w={50} h={50} />
        <Text c="white" fz={22} ta="center" lh={1} fw={700} m={5}>
          {~~temperature_2m}°С
        </Text>
      </Flex>
    </Flex>
  );
};

export default OtherCityCard;
