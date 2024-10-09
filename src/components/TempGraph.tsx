import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  LabelList,
  Tooltip,
} from "recharts";
import { useAppSelector } from "../store/hooks";
import { mainColor } from "../utils/constants";
import CustomTooltip from "./CustomTooltip";
import { filterWeatherData } from "../utils/helpers";
import styled from "styled-components";
import { useMemo } from "react";

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 530px) {
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 530px) {
    width: 50rem;
  }
`;

export default function TempGraph() {
  const { weather } = useAppSelector((state) => state.weather);
  const {
    timezone: { formatted: formattedTimezone },
  } = useAppSelector((state) => state.timezone);
  const currentTime = useMemo(
    () => new Date(formattedTimezone.replace(" ", "T")),
    [formattedTimezone]
  );

  const degFiltered = filterWeatherData(
    weather.hourly.temperature_2m,
    weather.hourly.time,
    currentTime
  );

  const humidityFiltered = filterWeatherData(
    weather.hourly.relative_humidity_2m,
    weather.hourly.time,
    currentTime
  );

  const windSpeedFiltered = filterWeatherData(
    weather.hourly.wind_speed_10m,
    weather.hourly.time,
    currentTime
  ).map((speed) => Math.round(speed));

  const windDirFiltered = filterWeatherData(
    weather.hourly.wind_direction_10m,
    weather.hourly.time,
    currentTime
  );

  const data = weather.hourly.time
    .filter((time) => new Date(time).getTime() > currentTime.getTime())
    .slice(0, 12)
    .map((time, i) => {
      return {
        date: time.slice(-5, -3) + " ч",
        deg: degFiltered[i],
        humidity: humidityFiltered[i],
        windSpeed: windSpeedFiltered[i],
        windDir: windDirFiltered[i],
      };
    });

  return (
    <ScrollContainer>
      <Container>
        <ResponsiveContainer height="100%" width="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 20, left: 20, bottom: 0 }}
          >
            <Area
              fill={`${mainColor}`}
              type="monotone"
              dataKey="deg"
              dot={{ stroke: mainColor, strokeWidth: 2 }}
            >
              <LabelList
                dataKey="deg"
                position="top"
                style={{ fontSize: "1.4rem" }}
              />
            </Area>
            <XAxis
              dataKey="date"
              style={{
                fontSize: "1.4rem",
              }}
            />
            <Tooltip content={<CustomTooltip />} />
          </AreaChart>
        </ResponsiveContainer>
      </Container>
    </ScrollContainer>
  );
}
