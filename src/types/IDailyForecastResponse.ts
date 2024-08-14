import {HourlyUnits} from "./IHourlyUnits.ts";
import {HourlyData} from "./IHourlyData.ts";

export interface WeatherResponse {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    hourly_units: HourlyUnits;
    hourly: HourlyData;
}