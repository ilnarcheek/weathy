import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWeather } from "../../models/IWeather";
import axios from "axios";

interface WeatherState {
  weather: IWeather;
  isLoading: boolean;
  error: string;
}

interface FetchLocation {
  lat: number;
  lng: number;
  zoneName: string;
}

export const initialState: WeatherState = {
  weather: {
    current: {
      relative_humidity_2m: 0,
      surface_pressure: 0,
      temperature_2m: 0,
      wind_direction_10m: 0,
      wind_speed_10m: 0,
    },
    daily: {
      sunrise: [""],
      sunset: [""],
      temperature_2m_max: [0],
      temperature_2m_min: [0],
      time: [""],
      weather_code: [0],
      wind_direction_10m_dominant: [0],
      wind_speed_10m_max: [0],
    },
    hourly: {
      temperature_2m: [0],
      time: [""],
      relative_humidity_2m: [0],
      wind_speed_10m: [0],
      wind_direction_10m: [0],
    },
  },
  isLoading: false,
  error: "",
};

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeatherInfo",
  async ({ lat, lng, zoneName }: FetchLocation, thunkAPI) => {
    try {
      const res = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,surface_pressure,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,wind_direction_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,wind_speed_10m_max,wind_direction_10m_dominant&wind_speed_unit=ms&timezone=${zoneName}`
      );
      return res.data;
    } catch {
      return thunkAPI.rejectWithValue("Не удалось загрузить данные о погоде");
    }
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchWeather.pending.type, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchWeather.fulfilled.type,
        (state, action: PayloadAction<IWeather>) => {
          state.isLoading = false;
          state.weather = action.payload;
        }
      )
      .addCase(
        fetchWeather.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export default weatherSlice.reducer;
