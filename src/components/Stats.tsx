import styled from "styled-components";
import Stat from "./Stat";
import { IoWaterOutline } from "react-icons/io5";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { PiThermometerHot } from "react-icons/pi";
import { useAppSelector } from "../store/hooks";

const StyledStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  background-color: var(--light-color);
  border-radius: var(--border-radius-m);
  box-shadow: var(--box-shadov-s);

  grid-row: 2 / 3;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);

    grid-row: 1 / 2;
  }

  @media (max-width: 660px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);

    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }

  @media (max-width: 530px) {
    grid-row: 2 / 3;
    grid-column: 1 / -1;

    margin: 0 2rem;
  }
`;

export default function Stats() {
  const { weather } = useAppSelector((state) => state.weather);

  return (
    <StyledStats>
      <Stat icon={<FiSunrise />} data={weather.daily.sunrise[0].slice(-5)}>
        Рассвет
      </Stat>
      <Stat icon={<FiSunset />} data={weather.daily.sunset[0].slice(-5)}>
        Закат
      </Stat>
      <Stat
        icon={<IoWaterOutline />}
        data={weather.current.relative_humidity_2m + "%"}
      >
        Влажность
      </Stat>
      <Stat
        icon={<PiThermometerHot />}
        data={(weather.current.surface_pressure / 1.333).toFixed(0) + "мм"}
      >
        Давление
      </Stat>
    </StyledStats>
  );
}
