import { Flex } from "@mantine/core";
import RainProbabilityChart from "../../atoms/RainProbabilityChart/RainProbabilityChart.tsx";
import OtherCitiesScrollArea from "../../molecules/OtherCitiesScrollArea/OtherCitiesScrollArea.tsx";

const RainOtherCities = () => {
  return (
    <Flex
      w={"25%"}
      h={"100%"}
      direction={"column"}
      justify={"space-between"}
      align={"center"}
      p={10}
    >
      <RainProbabilityChart />
      <OtherCitiesScrollArea />
    </Flex>
  );
};

export default RainOtherCities;
