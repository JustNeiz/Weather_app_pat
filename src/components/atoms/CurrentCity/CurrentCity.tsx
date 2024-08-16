import { Flex, Text } from "@mantine/core";
import { IconMapPinFilled } from "@tabler/icons-react";
import { useCurrentCity } from "../../../store/useCurrentCity";

const CurrentCity = () => {
  const { city } = useCurrentCity();
  return (
    <Flex c="white" mr={40}>
      <IconMapPinFilled />
      <Text fw={700}>{city}</Text>
    </Flex>
  );
};

export default CurrentCity;
