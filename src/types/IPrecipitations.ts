interface HourlyData {
  time: string[];
  precipitation_probability: number[];
}

interface HourlyUnits {
  time: string;
  precipitation_probability: string;
}
export interface IPrecipitations {
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
