import styled from "styled-components";

interface Day {
  date: string;
  direction: string;
  speed: number;
}

interface DayTempProps {
  data: Day;
}

const Day = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  gap: 0.5rem;
  border-right: 1px solid var(--secondary-font-color);

  &:last-child {
    border: none;
  }

  @media (max-width: 860px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--secondary-font-color);
  }

  @media (max-width: 660px) {
    width: 100%;
    border-bottom: none;
    border-right: 1px solid var(--secondary-font-color);
  }

  @media (max-width: 530px) {
    gap: 0;
  }
`;

const DayOfWeek = styled.span`
  font-size: var(--font-size-s);
  text-transform: uppercase;
`;

const Speed = styled.span`
  font-size: var(--font-size-l);
  font-weight: 700;

  @media (max-width: 860px) {
    font-size: var(--font-size-m);
  }

  @media (max-width: 660px) {
    font-size: var(--font-size-l);
  }
`;

const Direction = styled.span`
  font-size: var(--font-size-s);
`;

export default function DayTemp({ data }: DayTempProps) {
  return (
    <Day>
      <DayOfWeek>{data.date}</DayOfWeek>
      <Speed>{Math.round(data.speed)} м/с</Speed>
      <Direction>{data.direction}</Direction>
    </Day>
  );
}
