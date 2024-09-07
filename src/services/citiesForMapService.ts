import { otherCitiesApi } from "./apiService.ts";
import { Bounds } from "../types/BoundsTypes.ts";

export const citiesForMapService = async (bounds: Bounds, zoomLevel: number) => {
  if (!bounds) {
    return [];
  }

  const { latMin, lonMin, latMax, lonMax } = bounds;

  // Устанавливаем пороги населения в зависимости от уровня зума
  let populationThreshold;
  if (zoomLevel >= 6) {
    populationThreshold = 100000;  // Порог для небольших городов
  } else if (zoomLevel >= 4) {
    populationThreshold = 500000;  // Порог для средних городов
  } else {
    populationThreshold = 1000000; // Порог для крупных городов
  }

  // Пример API запроса, который использует видимые границы и уровень зума
  const response = await otherCitiesApi.get(
    `?min_lat=${latMin}&max_lat=${latMax}&min_lon=${lonMin}&max_lon=${lonMax}&min_population=${populationThreshold}&limit=30`
  );

  return response.data;
};
