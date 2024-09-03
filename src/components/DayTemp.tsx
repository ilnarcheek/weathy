import styled from "styled-components";

import { IconContext } from "react-icons";

import { mainColor } from "../utils/constants";
import { dayWeatherIcon } from "../utils/helpers.tsx";

interface Day {
  date: string;
  deg: string;
  code: number;
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
`;

const DayOfWeek = styled.span`
  font-size: var(--font-size-s);
  text-transform: uppercase;
`;

const Temp = styled.span`
  font-size: var(--font-size-m);
  font-weight: 700;
`;

export default function DayTemp({ data }: DayTempProps) {
  const icon = dayWeatherIcon(data.code);

  return (
    <Day>
      <DayOfWeek>{data.date}</DayOfWeek>
      <IconContext.Provider value={{ size: "4rem", color: mainColor }}>
        {icon}
      </IconContext.Provider>
      <Temp>{data.deg}&deg;</Temp>
    </Day>
  );
}
