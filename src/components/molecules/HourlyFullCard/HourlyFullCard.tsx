import { Flex, Image, Text } from "@mantine/core";
import { IHourlyProps } from "../../../types/IHourlyProps.ts";
import { weatherCodes } from "../../../constants/weatherCodesConstants.ts";
import WeatherInfoText from "../../atoms/WeatherInfoText/WeatherInfoText.tsx";
import { getWindDirection } from "../../../helpers/getWindDirection.ts";
import React from "react";


const HourlyFullCard: React.FC<IHourlyProps> = ({ hourlyProps }) => {
  const {
    date,
    time,
    temperature_2m,
    weather_code,
    relative_humidity_2m,
    apparent_temperature,
    precipitation_probability,
    wind_speed_10m,
    wind_direction_10m,
    surface_pressure,
  } = hourlyProps;

  let imagePath = "";

  if (weather_code in weatherCodes) {
    imagePath = weatherCodes[weather_code];
  }


  return (
    <Flex
      w={350}
      h={200}
      bg="#BBD6EC"
      direction="column"
      m={5}
      style={{
        borderRadius: 20,
      }}
    >
      <Flex
        h="20%"
        bg="#AEC9DF"
        justify="space-between"
        p={10}
        align="center"
        style={{
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
      >
        <Text fz={22} ta="center" lh={1} fw={700} m={5}>
          {time}
        </Text>
        <Text fz={22} ta="center" lh={1} fw={700} m={5}>
          {date}
        </Text>
      </Flex>
      <Flex p={10} w="100%" justify="space-between">
        <Flex direction="column" m={5} mt={20}>
          <Text fw={700} fz={30}>
            {~~temperature_2m}°С
          </Text>
          <WeatherInfoText
            text="Real feel"
            data={`${~~apparent_temperature}°С`}
          />
          <WeatherInfoText
            text={`Wind, km/h`}
            data={`${getWindDirection(wind_direction_10m)}, ${~~wind_speed_10m}`}
          />
          <WeatherInfoText
            text={"Pressure, hPa"}
            data={`${~~surface_pressure}`}
          />
        </Flex>
        <Flex direction="column" m={5}>
          <Image src={imagePath} w={75} h={75} alt={"image"} />
          <WeatherInfoText
            text={"Humidity, %"}
            data={`${relative_humidity_2m}`}
          />
          <WeatherInfoText
            text={"Precipitation prob, %"}
            data={`${precipitation_probability}`}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HourlyFullCard;
