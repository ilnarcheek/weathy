import styled from "styled-components";
import DayWind from "./DayWind";
import { useAppSelector } from "../store/hooks";
import { DayOfWeek, WindDirection } from "../utils/helpers.ts";

const StyledWindForecast = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`;

export default function WindForecast() {
  const { weather } = useAppSelector((state) => state.weather);

  const data = weather.daily.wind_speed_10m_max
    .slice(0, 4)
    .map((windSpeed, i) => {
      return {
        date: DayOfWeek(weather.daily.time, i),
        direction: WindDirection(weather.daily.wind_direction_10m_dominant[i]),
        speed: Math.round(windSpeed),
      };
    })
    .slice(1, 4);

  return (
    <StyledWindForecast>
      {data.map((day) => (
        <DayWind data={day} key={day.date} />
      ))}
    </StyledWindForecast>
  );
}
