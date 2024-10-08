import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span`
  font-size: var(--font-size-l);
  color: var(--secondary-font-color);
  text-align: center;
`;

export default function NoGeoMessage() {
  return (
    <Container>
      <Text>
        Пожалуйста, дайте разрешение на получение информации о том, где вы
        находитесь. Или воспользуйтесь поиском.
      </Text>
    </Container>
  );
}
