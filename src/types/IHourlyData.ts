export interface HourlyData {
    time: string[];
    temperature_2m: number[];
    relative_humidity_2m: number[];
    apparent_temperature: number[];
    precipitation_probability: number[];
    weather_code: number[];
    surface_pressure: number[];
    wind_speed_10m: number[];
    wind_direction_10m: number[];
}