import styled from "styled-components";
import WindForecast from "./WindForecast";
import CurrentWind from "./CurrentWind";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--light-color);
  border-radius: var(--border-radius-m);
  box-shadow: var(--box-shadov-s);
  padding: 2rem 3rem;
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
