import Dashboard from "../components/pages/MainPage/Dashboard.tsx";
import { Flex } from "@mantine/core";
import { setDefaultOtherCities } from "../helpers/setDefaultOtherCities.ts";

const MainPage = () => {
  setDefaultOtherCities();
  return (
    <Flex
      w="100vw"
      h="100vh"
      direction="column"
      bg="#111015"
      p={10}
    >
      <Dashboard />
    </Flex>
  );
};

export default MainPage;
