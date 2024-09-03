import styled from "styled-components";
import GeoDegree from "./GeoDegree";
import DateTime from "./DateTime";

const StyledHero = styled.div`
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0)),
    url("src/assets/pics/city_placeholder.jpg");
  background-size: cover;
  background-position: center;
  border-radius: var(--border-radius-m);
  filter: brightness(1.1);
  box-shadow: var(--box-shadov-s);

  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 1.5rem 2rem;
`;

export default function Hero() {
  return (
    <StyledHero>
      <GeoDegree />
      <DateTime />
    </StyledHero>
  );
}
