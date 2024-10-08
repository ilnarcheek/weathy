import styled from "styled-components";
import TempGraph from "./TempGraph";
import TempForecast from "./TempForecast";

const StyledForecast = styled.div`
  grid-row: 2 / 4;
  grid-column: 2 / -1;

  display: grid;
  /* grid-template-rows: 6fr 5fr; */
  grid-template-rows: min-content 6fr max-content;
  background-color: var(--light-color);
  border-radius: var(--border-radius-m);
  box-shadow: var(--box-shadov-s);
  padding: 2rem 3rem;

  @media (max-width: 860px) {
    padding: 1.5rem 2rem;
    grid-template-rows: min-content 1fr max-content;

    grid-row: 2 / 3;
    grid-column: 2 / -1;
  }

  @media (max-width: 660px) {
    grid-row: 3 / 4;
    grid-column: 1 / -1;
  }

  @media (max-width: 530px) {
    grid-row: 4 / 5;
    grid-column: 1 / -1;
    row-gap: 1rem;

    margin: 0 2rem;
  }
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
