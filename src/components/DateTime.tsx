import styled from "styled-components";
import Time from "./Time";
import { useAppSelector } from "../store/hooks";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--light-color);
  line-height: 1;
  gap: 0.7rem;
  text-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
`;

const DateInfo = styled.span`
  font-size: var(--font-size-l);

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 660px) {
    font-size: 2rem;
  }
`;

export default function DateTime() {
  const {
    timezone: { formatted },
  } = useAppSelector((state) => state.timezone);

  const currentDate = new Date(formatted.replace(" ", "T"));
  const dayOfWeek = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];
  return (
    <Container>
      <DateInfo>
        {String(currentDate.getDate()).padStart(2, "0")}.
        {String(currentDate.getMonth() + 1).padStart(2, "0")},{" "}
        {dayOfWeek[currentDate.getDay()]}
      </DateInfo>
      <Time />
    </Container>
  );
}
