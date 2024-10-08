import styled from "styled-components";
import WindForecast from "./WindForecast";
import CurrentWind from "./CurrentWind";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--light-color);
  border-radius: var(--border-radius-m);
  box-shadow: var(--box-shadov-s);
  padding: 2rem 3rem;

  grid-row: 3 / 4;

  @media (max-width: 860px) {
    padding: 1.5rem 2rem;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }

  @media (max-width: 660px) {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
  }

  @media (max-width: 530px) {
    grid-row: 3 / 4;
    grid-column: 1 / -1;

    margin: 0 2rem;
  }
`;

const Header = styled.p`
  font-weight: 700;
`;

export default function Wind() {
  return (
    <Container>
      <Header>Ветер</Header>
      <CurrentWind />
      <WindForecast />
    </Container>
  );
}
