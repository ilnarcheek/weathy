import { useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import MainPart from "./components/MainPart";
import NoGeoMessage from "./components/NoGeoMessage";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { fetchGeolocation } from "./store/reducers/geoSlice";
import { fetchTimezone } from "./store/reducers/timezoneSlice";
import { fetchWeather, initialState } from "./store/reducers/weatherSlice";
import GlobalStyle from "./styles/GlobalStyles";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 110rem;
  height: 100dvh;
  gap: 2rem;

  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 530px) {
    padding: 2rem 0;
  }
`;

export default function App() {
  const {
    location: { lat, lng },
  } = useAppSelector((state) => state.geo);
  const {
    timezone: { zoneName },
  } = useAppSelector((state) => state.timezone);
  const { weather, isLoading } = useAppSelector((state) => state.weather);

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
      dispatch(fetchWeather({ lat, lng, zoneName }));
    }
  }, [lat, lng, zoneName, dispatch]);

  return (
    <StyledApp>
      <GlobalStyle />
      <Header />
      {weather === initialState.weather && !isLoading ? (
        <NoGeoMessage />
      ) : (
        <MainPart />
      )}
    </StyledApp>
  );
}
