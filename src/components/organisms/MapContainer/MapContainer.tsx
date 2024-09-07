import WeatherMap from "../../molecules/WeatherMap/WeatherMap.tsx";
import { Flex } from "@mantine/core";
const MapContainer = () => {
  return(
    <Flex w={'100%'}  >
      <WeatherMap/>
    </Flex>
  );
};

export default MapContainer;
