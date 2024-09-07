import { ICityCoordinates } from "../types/ICityCoordinates.ts";
import { useOtherCitiesWatcher } from "../store/useOtherCitiesWatcher.ts";


export   const updateLocalStorage = (city: ICityCoordinates) => {
  const { changeWatcher } = useOtherCitiesWatcher.getState();
  changeWatcher();
  const citiesHistory = localStorage.getItem("cities");

  let citiesHistoryArray: ICityCoordinates[] = citiesHistory
    ? JSON.parse(citiesHistory)
    : [];

  if (citiesHistoryArray.length > 19) {
    citiesHistoryArray.pop();
  }

  if (!citiesHistoryArray.some((item) => item.city === city.city)) {
    citiesHistoryArray.unshift(city);
  } else {
    citiesHistoryArray = citiesHistoryArray.filter((item) => item.city !== city.city);
    citiesHistoryArray.unshift(city);
  }

  localStorage.setItem("cities", JSON.stringify(citiesHistoryArray));
};