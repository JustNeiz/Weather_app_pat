import { bigCities } from "../constants/constants.ts";
import { ICityCoordinates } from "../types/ICityCoordinates.ts";

export const setDefaultOtherCities = () => {
  const citiesHistoryArr = localStorage.getItem("cities");

  let citiesHistory = citiesHistoryArr ? JSON.parse(citiesHistoryArr) : [];

  if (citiesHistory.length < 19) {
    const newCities = bigCities.filter(bigCity =>
      !citiesHistory.some((existingCity :ICityCoordinates) =>
        existingCity.city === bigCity.city &&
        existingCity.latitude === bigCity.latitude &&
        existingCity.longitude === bigCity.longitude
      )
    );

    if (citiesHistory.length + newCities.length > 19) {
      newCities.length = 19 - citiesHistory.length;
    }

    citiesHistory = [...citiesHistory, ...newCities];
    localStorage.setItem("cities", JSON.stringify(citiesHistory));
  }
}