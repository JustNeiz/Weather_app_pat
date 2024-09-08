import { Flex, Grid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import ForecastContainer from "../../organisms/ForecastContainer/ForecastContainer.tsx";
import MapContainer from "../../organisms/MapContainer/MapContainer.tsx";
import RainProbabilityChart from "../../organisms/RainProbabilityChart/RainProbabilityChart.tsx";
import OtherCitiesScrollArea from "../../organisms/OtherCitiesScrollArea/OtherCitiesScrollArea.tsx";
import NavMenu from "../../molecules/NavMenu/NavMenu.tsx";
import SearchMenu from "../../molecules/SearchMenu/SearchMenu.tsx";
import GitButton from "../../atoms/GitButton/GitButton.tsx";

const Dashboard = () => {
  const isLargeScreen = useMediaQuery('(min-width: 1280px)');

  return (
    <Grid h={'100vh'} gutter={"xl"}>
      <Grid.Col span={isLargeScreen ? 8 : 8}>
        <Flex  justify={'space-between'} wrap={isLargeScreen ? 'nowrap' : 'wrap'} w={'100%'}>
          <NavMenu />
          <SearchMenu />
        </Flex>
      </Grid.Col>
      <Grid.Col span={isLargeScreen ? 4 : 4}>
        <GitButton />
      </Grid.Col>

      <Grid.Col span={isLargeScreen ? 8 : 12}>
        <ForecastContainer />
      </Grid.Col>
      <Grid.Col span={isLargeScreen ? 4 : 12}>
        <RainProbabilityChart />
      </Grid.Col>
      <Grid.Col span={isLargeScreen ? 8 : 12}>
        <MapContainer />
      </Grid.Col>
      <Grid.Col span={isLargeScreen ? 4 : 12}>
        <OtherCitiesScrollArea />
      </Grid.Col>
    </Grid>
  );
};

export default Dashboard;
