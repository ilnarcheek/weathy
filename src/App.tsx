import styled from "styled-components";
import Container from "./components/Container";
import GlobalStyle from "./styles/GlobalStyles";

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e9ecef;
  width: 100dvw;
  height: 100dvh;
`;

export default function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Container />
    </StyledApp>
  );
}
