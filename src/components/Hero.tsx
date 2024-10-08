import styled from "styled-components";
import GeoDegree from "./GeoDegree";
import DateTime from "./DateTime";

const StyledHero = styled.div`
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5) 35%, rgba(0, 0, 0, 0)),
    url("assets/pics/city.jpg");
  background-size: cover;
  background-position: center;
  border-radius: var(--border-radius-m);
  filter: brightness(1.1);
  box-shadow: var(--box-shadov-s);

  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 1.5rem 2rem;

  grid-row: 1 / 2;
  grid-column: 1 / -1;

  @media (max-width: 860px) {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
  }

  @media (max-width: 660px) {
    grid-row: 1 / 2;
    grid-column: 1 / -1;
  }

  @media (max-width: 530px) {
    grid-row: 1 / 2;
    grid-column: 1 / -1;

    border-radius: 0;
  }
`;

export default function Hero() {
  return (
    <StyledHero>
      <GeoDegree />
      <DateTime />
    </StyledHero>
  );
}
