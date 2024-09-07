import MapContainer from "../../organisms/MapContainer/MapContainer.tsx";
import ForecastContainer from "../../organisms/ForecastContainer/ForecastContainer.tsx";
import { Flex } from "@mantine/core";

const ForecastMapDiv = () => {
  return (
    <Flex w={'100%'} h={'100%'} direction={'column'} >
      <ForecastContainer />
      <MapContainer />
    </Flex>
  );
};

export default ForecastMapDiv;
