import {apiService} from "./apiService.ts";
import {IWeatherRequestQueryData} from "../types/WeatherRequestQueryData.interface.ts";
import {IWeatherRequestQueryShortData} from "../types/WeatherRequestQueryShortData.interface.ts";
import {format} from "@formkit/tempo";
import {AxiosResponse} from "axios";
import {IFullResponse} from "../types/FullResponse.interface.ts";


const query : IWeatherRequestQueryData = {
    latitude: '55.6724',
    longitude: '13.0685',
    weather_type: true,
    max_temperature: true,
    apparent_temperature: true,
    wind_direction: true,
    wind_speed: true,
    humidity: true,
    sunrise: true,
    sunset: true,
}

const generateUrl = (
    duration: string,
    query: IWeatherRequestQueryData | IWeatherRequestQueryShortData,
) : string => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const todayFormatted = format(today, 'YYYY-MM-DD', 'en');
    const tomorrowFormatted = format(tomorrow, 'YYYY-MM-DD', 'en');



    switch (duration) {
        case 'today': {
            const { latitude, longitude } = query as IWeatherRequestQueryData;
            return `?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m&daily=sunrise,sunset&timezone=auto&start_date=${todayFormatted}&end_date=${todayFormatted}`;
        }

        case 'tomorrow': {
            const { latitude, longitude } = query as IWeatherRequestQueryData;
            return `?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m&daily=sunrise,sunset&timezone=auto&start_date=${tomorrowFormatted}&end_date=${tomorrowFormatted}`;
        }

        case 'weekly': {
            const { latitude, longitude } = query as IWeatherRequestQueryShortData;
            return `?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max&timezone=auto`;
        }
    }
};
export const forecastService = {
    forecast_tomorrow: async () => {
        const response: AxiosResponse<IFullResponse> = await apiService.get(generateUrl('tomorrow', query));
        return response.data;
    },
    forecast_today: async () : Promise<AxiosResponse<IFullResponse>> => {
        return await apiService.get(generateUrl('today', query)).then(res => res)
    }
}