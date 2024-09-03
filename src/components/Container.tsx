import styled from "styled-components";
import Header from "./Header";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import { fetchGeolocation } from "../store/reducers/geoSlice";
import { fetchWeather, initialState } from "../store/reducers/weatherSlice";
import NoGeoMessage from "./NoGeoMessage";
import MainPart from "./MainPart";
import { fetchTimezone } from "../store/reducers/timezoneSlice";

const StyledContainer = styled.div`
  width: 110rem;
  height: 100dvh;
  padding: 3rem 5rem 4rem;
  display: grid;
  grid-template-rows: max-content repeat(2, 1fr);
  row-gap: 2rem;
`;

export default function Container() {
  const {
    location: { lat, lng },
  } = useAppSelector((state) => state.geo);
  const {
    timezone: { zoneName },
  } = useAppSelector((state) => state.timezone);
  const { weather } = useAppSelector((state) => state.weather);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGeolocation());
  }, [dispatch]);

  useEffect(() => {
    if (lat && lng) {
      dispatch(fetchTimezone({ lat, lng }));
    }
  }, [lat, lng, dispatch]);

  useEffect(() => {
    if (lat && lng && zoneName) {
      console.log(lat, lng, zoneName);
      dispatch(fetchWeather({ lat, lng, zoneName }));
    }
  }, [lat, lng, zoneName, dispatch]);

  return (
    <StyledContainer>
      <Header />
      {weather === initialState.weather ? <NoGeoMessage /> : <MainPart />}
    </StyledContainer>
  );
}
