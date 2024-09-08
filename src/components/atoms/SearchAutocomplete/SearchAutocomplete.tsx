import { Autocomplete, Flex } from "@mantine/core";
import { useDebouncedValue, useMediaQuery } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { findCityService } from "../../../services/findCityService";
import { useCurrentCity } from "../../../store/useCurrentCity";
import { useCoordinates } from "../../../store/useCoordinates";
import { IFindCityResponse } from "../../../types/IFindCityResponse";
import { ICityCoordinates } from "../../../types/ICityCoordinates.ts";
import { ICoordinates } from "../../../types/ICoordinates.ts";
import { updateLocalStorage } from "../../../helpers/updateLocalStorage.ts";

const SearchAutocomplete = () => {
  const [citiesArray, setCitiesArray] = useState<{ label: string; value: string }[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue] = useDebouncedValue(inputValue, 500);
  const { setCity } = useCurrentCity();
  const { setCoordinates } = useCoordinates();

  const { data, error } = useQuery<IFindCityResponse>({
    queryKey: ["citiesArr", debouncedValue],
    queryFn: () => findCityService.getCity(debouncedValue),
    enabled: !!debouncedValue,
  });

  useEffect(() => {
    if (data && data.results) {
      const formattedCities = data.results.map((item) => {
        console.log(item);
        return {
        label: `${item.name}${item?.country ? (', ' + item.country) : ''}${item?.admin1 ?  (', ' + item.admin1) : ''}`,
        value: `${item.name}_${item.latitude}_${item.longitude}`
      }});

      setCitiesArray(formattedCities);
    } else {
      setCitiesArray([]);
    }
  }, [data]);



  const handleSelect = (item: string) => {
    if (item) {
      const [cityName, lat, lon] = item.split("_")

      const cityObj: ICityCoordinates = {
        city: cityName,
        latitude: lat,
        longitude: lon,
      };

      const cityCoordinates: ICoordinates ={
        longitude: +lon,
        latitude: +lat,
      }
      setCity(cityName);
      updateLocalStorage(cityObj);
      setCoordinates(cityCoordinates)
      setInputValue(' ');
    }
  };
  const isLargeScreen = useMediaQuery('(min-width: 1280px)')
  return (
    <Flex align="center" >
      <Autocomplete
        data={citiesArray}
        value={inputValue}
        onChange={setInputValue}
        onOptionSubmit={handleSelect}
        w={isLargeScreen ? 300 : 200}
        placeholder="Start input city"
        radius="md"
        c="white"
        styles={{
          input: {
            backgroundColor: "#1E1E1E",
            color: "white",
          },
          dropdown: {
            backgroundColor: "#1E1E1E",
            color: "white",
          },
          option: {
            backgroundColor: "black",
            "&[dataHovered]": {
              backgroundColor: "white",
            },
          },
        }}
      />
      {error && <div style={{ color: "red" }}>Error loading cities</div>}
    </Flex>
  );
};

export default SearchAutocomplete;
