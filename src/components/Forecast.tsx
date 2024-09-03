import styled from "styled-components";
import TempGraph from "./TempGraph";
import TempForecast from "./TempForecast";

const StyledForecast = styled.div`
  grid-row: 1 / -1;
  grid-column: 2 / -1;
  display: grid;
  /* grid-template-rows: 6fr 5fr; */
  grid-template-rows: min-content 6fr max-content;
  background-color: var(--light-color);
  border-radius: var(--border-radius-m);
  box-shadow: var(--box-shadov-s);
  padding: 2rem 3rem;
`;

const Header = styled.header`
  font-size: var(--font-size-m);
  font-weight: 700;
`;

export default function Forecast() {
  return (
    <StyledForecast>
      <Header>Почасовой прогноз</Header>
      <TempGraph />
      <TempForecast />
    </StyledForecast>
  );
}
