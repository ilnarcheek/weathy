import styled from "styled-components";
import { useAppSelector } from "../store/hooks";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--light-color);
  line-height: 1;
  gap: 0.7rem;
  text-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
`;

const Geo = styled.span`
  font-size: var(--font-size-l);

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 660px) {
    font-size: 2rem;
  }
`;

const Degree = styled.span`
  font-size: var(--font-size-xxl);
  font-weight: 300;

  @media (max-width: 1024px) {
    font-size: 10rem;
  }

  @media (max-width: 660px) {
    font-size: 7rem;
  }
`;

export default function GeoDegree() {
  const { weather } = useAppSelector((state) => state.weather);
  const {
    timezone: { cityName, countryName },
  } = useAppSelector((state) => state.timezone);

  return (
    <Container>
      <Geo>
        {cityName}, {countryName}
      </Geo>
      <Degree>{weather.current.temperature_2m}&deg;</Degree>
    </Container>
  );
}
