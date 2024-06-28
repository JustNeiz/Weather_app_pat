export interface IFullResponse {
  latitude: number;
  longitude: number;
  generationtime_ms?: number;
  utc_offset_seconds?: number;
  timezone?: string;
  timezone_abbreviation?: string;
  elevation?: number;
  current_units?: {
    time: string;
    interval: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    apparent_temperature: string;
    precipitation: string;
    weather_code: string;
    wind_speed_10m: string;
    wind_direction_10m: string;
  };
  current?: {
    time: string;
    interval: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    precipitation: number;
    weather_code: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
  };
  daily_units?: {
    time: string;
    sunrise: string;
    sunset: string;
  };
  daily?: {
    time: string[];
    sunrise: string[];
    sunset: string[];
  };
}
