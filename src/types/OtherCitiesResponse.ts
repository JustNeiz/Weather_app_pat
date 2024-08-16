// Интерфейс для единиц измерения
interface ICurrentUnits {
  time: string;
  interval: string;
  temperature_2m: string;
  weather_code: string;
}

// Интерфейс для текущей погоды
interface ICurrentWeather {
  time: string;
  interval: number;
  temperature_2m: number;
  weather_code: number;
}

// Основной интерфейс для координат и данных о погоде в городе
export interface OtherCitiesResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  location_id?: number; // Опциональное поле, так как оно есть не во всех объектах
  current_units: ICurrentUnits;
  current: ICurrentWeather;
}
