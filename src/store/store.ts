import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./reducers/weatherSlice";
import geoSlice from "./reducers/geoSlice";
import timezoneSlice from "./reducers/timezoneSlice";
import searchSlice from "./reducers/searchSlice";

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    geo: geoSlice,
    timezone: timezoneSlice,
    search: searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
