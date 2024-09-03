import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGeo } from "../../models/IGeo";
import { AppDispatch } from "../store";

interface WeatherState {
  location: IGeo;
  error: string;
}

const initialState: WeatherState = {
  location: {
    lat: null,
    lng: null,
  },
  error: "",
};

export const geoSlice = createSlice({
  name: "geo",
  initialState,
  reducers: {
    setGeolocation: (state, action: PayloadAction<IGeo>) => {
      state.location.lat = action.payload.lat;
      state.location.lng = action.payload.lng;
    },
    setGeolocationError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setGeolocation } = geoSlice.actions;
export default geoSlice.reducer;

export const fetchGeolocation = () => async (dispatch: AppDispatch) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude: lat, longitude: lng } = pos.coords;
        dispatch(geoSlice.actions.setGeolocation({ lat, lng }));
      },
      (err) => {
        dispatch(geoSlice.actions.setGeolocationError(err.message));
      }
    );
  } else {
    dispatch(
      geoSlice.actions.setGeolocationError(
        "Геолокация не работает в вашем браузере"
      )
    );
  }
};
