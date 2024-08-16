import { Autocomplete, Flex } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { findCityService } from "../../../services/findCityService";
import { useCurrentCity } from "../../../store/useCurrentCity";
import { useCoordinates } from "../../../store/useCoordinates";
import { IFindCityResponse } from "../../../types/IFindCityResponse";
import { ICity } from "../../../types/ICity.type";
import { ICityCoordinates } from "../../../types/ICityCoordinates.ts";

const SearchAutocomplete = () => {
  const { city, setCity } = useCurrentCity();
  const [citiesArray, setCitiesArray] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue] = useDebouncedValue(inputValue, 500);
  const { coordinates, setCoordinates } = useCoordinates();
  const [citiesObjectsArr, setCitiesObjectsArr] = useState<ICity[]>([]);

  const { data, error } = useQuery<IFindCityResponse>({
    queryKey: ["citiesArr", debouncedValue],
    queryFn: () => findCityService.getCity(debouncedValue),
    enabled: !!debouncedValue,
  });

  useEffect(() => {
    if (data && data.results) {
      const cityObjects: ICity[] = Array.from(
        new Map(data.results.map((city: ICity) => [city.name, city])).values(),
      );

      setCitiesObjectsArr(cityObjects);

      const uniqueCities = cityObjects.map((item) => item.name);
      setCitiesArray(uniqueCities);
    } else {
      setCitiesArray([]);
    }
  }, [data]);

  const setLocalStorage = (city: ICityCoordinates) => {
    const citiesHistory = localStorage.getItem("cities");

    let citiesHistoryArray: ICityCoordinates[] = citiesHistory
      ? JSON.parse(citiesHistory)
      : [];

    if (citiesHistoryArray.length > 19) {
      citiesHistoryArray.pop();
    }

    if (!citiesHistoryArray.includes(city)) {
      citiesHistoryArray.unshift(city);
    } else {
      citiesHistoryArray = citiesHistoryArray.filter((item) => item !== city);
      citiesHistoryArray.unshift(city);
    }

    localStorage.setItem("cities", JSON.stringify(citiesHistoryArray));
  };

  const handleSelect = (item: string | null) => {
    if (item) {
      // Убедитесь, что item не null
      setCity(item);
      const cityObj: ICityCoordinates = {
        city: item,
        latitude: `${coordinates.lattitude}`,
        longitude: `${coordinates.longitude}`,
      };
      setLocalStorage(cityObj);
    }
  };

  useEffect(() => {
    if (
      city &&
      citiesObjectsArr.length > 0 &&
      city === citiesObjectsArr[0]?.name
    ) {
      const cityCoordinates = {
        longitude: citiesObjectsArr[0].longitude,
        lattitude: citiesObjectsArr[0].latitude,
      };
      setCoordinates(cityCoordinates);
    }
  }, [citiesObjectsArr, city, setCoordinates]);

  return (
    <Flex align="center" h={40} m={10}>
      <Autocomplete
        data={citiesArray}
        value={inputValue}
        onChange={setInputValue}
        onOptionSubmit={handleSelect}
        w={300}
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
