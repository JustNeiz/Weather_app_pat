import { cityApi } from "./apiService";
import { IFindCityResponse } from "../types/IFindCityResponse";

const generateProps = (inputText : string) : string=> {
    return `?name=${inputText}&count=5&language=en&format=json`
}
export const findCityService = {
  getCity: async (inputText : string) : Promise<IFindCityResponse> => {
      const response = await cityApi.get(generateProps(inputText));
      return response.data;
  }
}