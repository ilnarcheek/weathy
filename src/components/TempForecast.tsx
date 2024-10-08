import styled from "styled-components";
import DayTemp from "./DayTemp";
import { useAppSelector } from "../store/hooks";
import { DayOfWeek } from "../utils/helpers.ts";

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: scroll;
`;

const StyledTempForecast = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  width: 100%;
  height: 100%;

  @media (max-width: 530px) {
    width: 50rem;
    margin-top: 0;
  }
`;

export default function TempForecast() {
  const { weather } = useAppSelector((state) => state.weather);

  const data = weather.daily.temperature_2m_max.map((temp, i) => {
    return {
      date: DayOfWeek(weather.daily.time, i),
      deg: `${Math.round(weather.daily.temperature_2m_min[i])}°/${Math.round(
        temp
      )}°`,
      code: weather.daily.weather_code[i],
    };
  });

  return (
    <Container>
      <StyledTempForecast>
        {data.map((day) => (
          <DayTemp data={day} key={day.date} />
        ))}
      </StyledTempForecast>
    </Container>
  );
}
