import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ITimezone } from "../../models/ITImezone";

const TIMEZONE_API_KEY = import.meta.env.VITE_TIMEZONE_API_KEY;

interface TimezoneState {
  timezone: ITimezone;
  isLoading: boolean;
  error: string;
}

interface FetchLocation {
  lat: number;
  lng: number;
}

const initialState: TimezoneState = {
  timezone: {
    countryCode: "",
    countryName: "",
    cityName: "",
    zoneName: "",
    timestamp: null,
    formatted: "",
  },
  isLoading: false,
  error: "",
};

export const fetchTimezone = createAsyncThunk(
  "timezone/fetchTimezoneInfo",
  async ({ lat, lng }: FetchLocation, thunkAPI) => {
    try {
      const res = await axios.get(
        `https://api.timezonedb.com/v2.1/get-time-zone?key=${TIMEZONE_API_KEY}&format=json&by=position&lat=${lat}&lng=${lng}`
      );
      return res.data;
    } catch {
      return thunkAPI.rejectWithValue("Не удалось загрузить о часовом поясе");
    }
  }
);

export const timezoneSlice = createSlice({
  name: "timezone",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTimezone.pending.type, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchTimezone.fulfilled.type,
        (state, action: PayloadAction<ITimezone>) => {
          state.timezone = action.payload;
        }
      )
      .addCase(
        fetchTimezone.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export default timezoneSlice.reducer;
