import { ScrollArea } from "@mantine/core";
import { ICityCoordinates } from "../../../types/ICityCoordinates.ts";
import { useQuery } from "@tanstack/react-query";
import { otherCitiesService } from "../../../services/otherCitiesService.ts";
import { OtherCitiesResponse } from "../../../types/OtherCitiesResponse.ts";
import OtherCityCard from "../../molecules/OtherCityCard/OtherCityCard.tsx";
import { transformOtherCitiesData } from "../../../helpers/transformOtherCitiesData.ts";
import { useEffect, useState } from "react";
import { useOtherCitiesWatcher } from "../../../store/useOtherCitiesWatcher.ts";

const OtherCitiesScrollArea = () => {
  const [citiesHistoryArray, setCitiesHistoryArray] = useState<
    ICityCoordinates[]
  >([]);
  const { watcher } = useOtherCitiesWatcher();

  let latitudes = "";
  let longitudes = "";

  if (citiesHistoryArray.length) {
    latitudes = citiesHistoryArray.map((city) => city.latitude).join(",");
    longitudes = citiesHistoryArray.map((city) => city.longitude).join(",");
  }

  const { data } = useQuery<OtherCitiesResponse[]>({
    queryKey: ["otherCities", latitudes, longitudes, citiesHistoryArray],
    queryFn: () => otherCitiesService(latitudes, longitudes),
    enabled: !!longitudes && !!latitudes,
  });

  const transformedData = transformOtherCitiesData(data, citiesHistoryArray);
  useEffect(() => {
    setCitiesHistoryArray(JSON.parse(localStorage.getItem("cities") || "[]"));
  }, [watcher]);

  return (
    <ScrollArea
      scrollbars={"y"}
      w={"100%"}
      h={"50vh"}
      px={10}
      style={{
        border: "1px lightgrey solid",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      {transformedData.map((city, index) => (
        <OtherCityCard cityData={city} key={index} />
      ))}
    </ScrollArea>
  );
};

export default OtherCitiesScrollArea;
