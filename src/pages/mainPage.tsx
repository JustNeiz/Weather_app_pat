import Header from "../components/organisms/Header/Header.tsx";

import Dashboard from "../components/pages/MainPage/Dashboard.tsx";
import { Flex } from "@mantine/core";

const MainPage = () => {
  return (
    <Flex
      w="95vw"
      h="90vh"
      direction="column"
      bg="#111015"
      style={{
        borderRadius: "25px",
      }}
    >
      <Header />
      <Dashboard />
    </Flex>
  );
};

export default MainPage;
