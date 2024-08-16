import ForecastMapDiv from "../ForecastMapDiv/ForecastMapDiv.tsx";
import RainOtherCities from "../RainOtherCitiesDiv/RainOtherCities.tsx";
import { Flex } from "@mantine/core";

const Dashboard = () => {
  return (
    <Flex
      w="100%"
      h="92%"
      style={{
        borderRadius: 25,
      }}
    >
      <ForecastMapDiv />
      <RainOtherCities />
    </Flex>
  );
};

export default Dashboard;
