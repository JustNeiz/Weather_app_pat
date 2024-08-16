import React from "react";
import { IWeatherInfoTextProp } from "../../../types/IWeatherInfoTextProp.ts";
import { Flex, Text } from "@mantine/core";

const WeatherInfoText: React.FC<IWeatherInfoTextProp> = ({ text, data }) => {
  return (
    <Flex align={"center"}>
      <Text c="#82939d" fz={14} mr={5}>
        {text}:
      </Text>
      <Text c="black" fw={600}>
        {data}
      </Text>
    </Flex>
  );
};

export default WeatherInfoText;
