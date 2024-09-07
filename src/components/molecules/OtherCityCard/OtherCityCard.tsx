import { Flex, Image, Text } from "@mantine/core";
import { IOtherCityProps } from "../../../types/IOtherCityProps.ts";
import { weatherCodes } from "../../../constants/weatherCodesConstants.ts";
import { useCurrentCity } from "../../../store/useCurrentCity.ts";
import { useCoordinates } from "../../../store/useCoordinates.ts";
import React from "react";
import { updateLocalStorage } from "../../../helpers/updateLocalStorage.ts";

const  OtherCityCard: React.FC<IOtherCityProps> = ({ cityData }) => {
  const { city, temperature_2m, weather_code, longitude, latitude } = cityData;
  let imagePath = "";
  if (weather_code in weatherCodes) {
    imagePath = weatherCodes[weather_code];
  }
  const newCoordinates = {
    longitude: +longitude,
    latitude: +latitude,
  };

  const { setCity } = useCurrentCity();
  const { setCoordinates } = useCoordinates();
  const handleClick = () => {
    setCity(city);
    setCoordinates(newCoordinates);
    updateLocalStorage({city, longitude, latitude});
  };
  return (
    <Flex
      w={"100%"}
      c={"white"}
      bg="#1B1B1D"
      mb={15}
      py={10}
      px={20}
      style={{
        borderRadius: 20,
        cursor: "pointer",
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
        <Image src={imagePath} w={50} h={50} alt={"image"} />
        <Text c="white" fz={22} ta="center" lh={1} fw={700} m={5}>
          {~~temperature_2m}°С
        </Text>
      </Flex>
    </Flex>
  );
};

export default OtherCityCard;
