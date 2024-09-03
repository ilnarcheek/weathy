import styled from "styled-components";
import { useAppSelector } from "../store/hooks";
import { WindDirection } from "../utils/helpers";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Speed = styled.span`
  font-size: var(--font-size-l);
  font-weight: 700;
`;
const Direction = styled.span`
  text-transform: uppercase;
`;

export default function CurrentWind() {
  const {
    weather: {
      current: { wind_speed_10m: speed, wind_direction_10m: direction },
    },
  } = useAppSelector((state) => state.weather);
  return (
    <Container>
      {Math.round(speed) ? (
        <>
          <Speed>{Math.round(speed)} м/с</Speed>
          <Direction>{WindDirection(direction, true)}</Direction>
        </>
      ) : (
        <Speed>Ветра нет</Speed>
      )}
    </Container>
  );
}
