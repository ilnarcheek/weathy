import { MoonLoader } from "react-spinners";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Spinner() {
  return (
    <Container>
      <MoonLoader color="#9775fa" speedMultiplier={0.5} />
    </Container>
  );
}
