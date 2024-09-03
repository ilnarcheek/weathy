import styled from "styled-components";
import Stats from "./Stats";
import Forecast from "./Forecast";
import Wind from "./Wind";

const Table = styled.div`
  display: grid;
  grid-template-columns: 3.2fr 6fr;
  grid-template-rows: 3fr 5fr;
  gap: 2rem;
`;

export default function InfoTable() {
  return (
    <Table>
      <Stats />
      <Forecast />
      <Wind />
    </Table>
  );
}
