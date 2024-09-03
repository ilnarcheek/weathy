import { TooltipProps } from "recharts";
import styled from "styled-components";
import { WindDirection } from "../utils/helpers.ts";

const Tooltip = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: var(--border-radius-s);
  box-shadow: var(--box-shadov-s);
  padding: 2rem;
`;

const Time = styled.p`
  font-size: var(--font-size-l);
  font-weight: 700;
  align-self: center;
`;

const Info = styled.span`
  font-weight: 700;
`;

export default function CustomTooltip({
  active,
  payload,
  label,
}: TooltipProps<number, string>) {
  if (active && payload && payload.length) {
    const { humidity, windSpeed, windDir } = payload[0].payload;

    return (
      <Tooltip>
        <Time>{label.slice(0, 2)}:00</Time>
        <p>
          Влажность: <Info>{humidity}%</Info>
        </p>
        <p>
          Скорость ветра: <Info>{windSpeed} м/с</Info>
        </p>
        <p>
          Направление ветра: <Info>{WindDirection(windDir)}</Info>
        </p>
      </Tooltip>
    );
  }
}
