import { Flex, Image, Text } from "@mantine/core";
import { DailyShortProps } from "../../../types/DailyShortProps";
import { weatherCodes } from "../../../constants/weatherCodesConstants";
import { format } from "@formkit/tempo";
import WeatherInfoText from "../../atoms/WeatherInfoText/WeatherInfoText.tsx";
import { getWindDirection } from "../../../helpers/getWindDirection.ts";
import React from "react";
const DailyForecastFullCard: React.FC<DailyShortProps> = ({ dayData }) => {
  const {
    date,
    temperature,
    weatherCode,
    apparentTemperature,
    sunrise,
    sunset,
    windDirection,
    windSpeed,
  } = dayData;

  let imagePath = "";

  if (weatherCode in weatherCodes) {
    imagePath = weatherCodes[weatherCode];
  }

  const now = new Date();

  const time = format(now, "HH:mm");
  const formatSunrise = format(sunrise, "HH:mm");
  const formatSunset = format(sunset, "HH:mm");

  return (
    <Flex
      w={300}
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
          {date}
        </Text>
        <Text fz={22} ta="center" lh={1} fw={700} m={5}>
          {time}
        </Text>
      </Flex>
      <Flex p={10} w="100%" justify="space-between">
        <Flex direction="column" m={5} mt={20}>
          <Text fw={700} fz={30}>
            {~~temperature}°С
          </Text>
          <Flex>
            <WeatherInfoText
              text="Real feel"
              data={`${~~apparentTemperature}°С`}
            />
          </Flex>
          <WeatherInfoText
            text={`Wind, km/h`}
            data={`${getWindDirection(windDirection)}, ${windSpeed}`}
          />
        </Flex>
        <Flex direction="column" m={5} w={100}>
          <Image src={imagePath} w={75} h={75} alt={"image"} />
          <Flex mt={10}>
            <WeatherInfoText text={"Sunrise"} data={`${formatSunrise}`} />
          </Flex>
          <Flex>
            <WeatherInfoText text={"Sunset"} data={`${formatSunset}`} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DailyForecastFullCard;
