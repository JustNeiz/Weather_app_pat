import { useQuery } from "@tanstack/react-query";
import { getDailyPrecipitationProbabilityService } from "../../../services/getDailyPrecipitationProbabilityService.ts";
import { useCoordinates } from "../../../store/useCoordinates.ts";
import { IPrecipitations } from "../../../types/IPrecipitations.ts";
import { IPrecipitationDataObject } from "../../../types/IPrecipitationDataObject.ts";
import { format } from "@formkit/tempo";
import { BarChart } from "@mantine/charts";
import { Flex, Text } from "@mantine/core";

const RainProbabilityChart = () => {
  const { coordinates } = useCoordinates();
  const { data } = useQuery<IPrecipitations>({
    queryKey: ["rainProbability", coordinates],
    queryFn: () => getDailyPrecipitationProbabilityService(coordinates),
    enabled: !!coordinates,
  });
  const probabilityData: IPrecipitationDataObject[] = [];
  data?.hourly.time.forEach((item, index) => {
    if (index % 4 === 0) {
      const formattedTime = format(item, "HH:mm");
      const precipitationData: IPrecipitationDataObject = {
        time: formattedTime,
        probability: `${data?.hourly.precipitation_probability[index] === 0 ? data?.hourly.precipitation_probability[index] + 1 : data?.hourly.precipitation_probability[index]}`,
      };
      probabilityData.push(precipitationData);
    }
  });

  console.log(probabilityData);
  return (
    // <ScrollArea w={400} h={400} bg={"black"}>
    <Flex direction={"column"} align={"flex-start"} w={"100%"} h={400}>
      <Text c={"white"} fw={500}>
        Precipitation probability
      </Text>
      <BarChart
        data={probabilityData}
        dataKey={"time"}
        series={[{ name: "probability", color: "#BBD6EC" }]}
        w={"100%"}
        h={200}
        tickLine="y"
        barProps={{ radius: 10, barSize: 10 }} // Сюда передать пропсы с речартса
        yAxisProps={{ domain: [0, 100] }}
        withTooltip={false}
      />
    </Flex>
    // </ScrollArea>
  );
};

export default RainProbabilityChart;
