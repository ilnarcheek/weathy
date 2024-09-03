export interface IWeather {
  current: {
    relative_humidity_2m: number;
    surface_pressure: number;
    temperature_2m: number;
    wind_direction_10m: number;
    wind_speed_10m: number;
  };
  daily: {
    sunrise: string[];
    sunset: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    time: string[];
    weather_code: number[];
    wind_direction_10m_dominant: number[];
    wind_speed_10m_max: number[];
  };
  hourly: {
    temperature_2m: number[];
    time: string[];
    relative_humidity_2m: number[];
    wind_speed_10m: number[];
    wind_direction_10m: number[];
  };
}
