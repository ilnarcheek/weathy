import styled from "styled-components";
import { useAppSelector } from "../store/hooks";
import Forecast from "./Forecast";
import Hero from "./Hero";
import Spinner from "./Spinner";
import Stats from "./Stats";
import Wind from "./Wind";

const Container = styled.div`
  display: grid;
  grid-template-rows: 8fr 3fr 5fr;
  grid-template-columns: 3.2fr 6fr;
  gap: 2rem;
  flex: 1;
  width: 100%;

  @media (max-width: 860px) {
    grid-template-columns: 1.8fr 4.2fr 1.8fr;
    grid-template-rows: repeat(2, 1fr);
  }

  @media (max-width: 660px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1.5fr;
  }

  @media (max-width: 530px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.8fr 0.7fr 1.5fr;
  }
`;

export default function MainPart() {
  const isLoadingWeather = useAppSelector((state) => state.weather.isLoading);
  const isLoadingTimezone = useAppSelector((state) => state.timezone.isLoading);

  if (isLoadingWeather || isLoadingTimezone) return <Spinner />;

  return (
    <Container>
      <Hero />
      <Stats />
      <Forecast />
      <Wind />
    </Container>
  );
}
