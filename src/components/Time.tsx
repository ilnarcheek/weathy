import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../store/hooks";

const StyledTime = styled.span`
  font-size: var(--font-size-xl);
  font-weight: 400;
  text-align: end;

  @media (max-width: 1024px) {
    font-size: 5rem;
  }

  @media (max-width: 660px) {
    font-size: 4rem;
  }
`;

export default function Time() {
  const [time, setTime] = useState<string>("");
  const {
    timezone: { formatted },
  } = useAppSelector((state) => state.timezone);

  const currentDate = new Date(formatted.replace(" ", "T"));

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date(currentDate).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(currentTime);
    };

    updateTime();

    const timerId = setInterval(updateTime, 60000);

    return () => clearInterval(timerId);
  }, []);

  return <StyledTime>{time}</StyledTime>;
}
