import { ICity } from "./ICity.type";

export interface IFindCityResponse {
  generationtime_ms: number,
  results: ICity[]
}