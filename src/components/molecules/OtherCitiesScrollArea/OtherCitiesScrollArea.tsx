import { ScrollArea } from "@mantine/core";
import { ICityCoordinates } from "../../../types/ICityCoordinates.ts";
import { useQuery } from "@tanstack/react-query";
import { otherCitiesService } from "../../../services/otherCitiesService.ts";
import { OtherCitiesResponse } from "../../../types/OtherCitiesResponse.ts";
import OtherCityCard from "../OtherCityCard/OtherCityCard.tsx";

const OtherCitiesScrollArea = () => {
  let latitudes = "";
  let longitudes = "";

  const citiesHistoryArray: ICityCoordinates[] = JSON.parse(
    localStorage.getItem("cities") || "[]",
  );

  if (citiesHistoryArray.length) {
    latitudes = citiesHistoryArray.map((city) => city.latitude).join(",");
    longitudes = citiesHistoryArray.map((city) => city.longitude).join(",");
  }

  const { data } = useQuery<OtherCitiesResponse[]>({
    queryKey: ["otherCities", latitudes, longitudes],
    queryFn: () => otherCitiesService(latitudes, longitudes),
    enabled: !!longitudes && !!latitudes,
  });

  return (
    <ScrollArea scrollbars={"y"} w={"100%"}>
      {data?.map((city, index) => {
        const cityName = citiesHistoryArray[index].city;
        return (
          <OtherCityCard
            city={cityName}
            temperature_2m={`${city.current.temperature_2m}`}
            weather_code={`${city.current.weather_code}`}
            latitude={`${city.latitude}`}
            longitude={`${city.longitude}`}
          />
        );
      })}
    </ScrollArea>
  );
};

export default OtherCitiesScrollArea;
