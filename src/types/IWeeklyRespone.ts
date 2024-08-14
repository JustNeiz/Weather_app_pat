interface DailyUnits {
  time: string;
  weather_code: string;
  temperature_2m_max: string;
  apparent_temperature_max: string;
  sunrise: string;
  sunset: string;
  precipitation_probability_max: string;
  wind_speed_10m_max: string;
  wind_direction_10m_dominant: string;
}

// Интерфейс для ежедневных данных
interface DailyData {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  apparent_temperature_max: number[];
  sunrise: string[];
  sunset: string[];
  precipitation_probability_max: number[];
  wind_speed_10m_max: number[];
  wind_direction_10m_dominant: number[];
}

// Интерфейс для основной структуры ответа
export interface IWeeklyResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: DailyUnits;
  daily: DailyData;
}


