import styled from "styled-components";
const Container = styled.div`
  grid-row: 2 / 4;
  margin: 0 auto;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span`
  font-size: var(--font-size-l);
  color: var(--secondary-font-color);
  text-align: center;
  margin-bottom: 5rem;
`;

export default function NoGeoMessage() {
  return (
    <Container>
      <Text>
        Пожалйста, дайте разрешение на получение информации о том, где вы
        находитесь или воспользуйтесь поиском
      </Text>
    </Container>
  );
}
