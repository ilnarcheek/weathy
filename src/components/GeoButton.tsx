import { IconContext } from "react-icons";
import { BsGeoAlt } from "react-icons/bs";
import { fetchGeolocation } from "../store/reducers/geoSlice";
import styled from "styled-components";
import { useAppDispatch } from "../store/hooks";
import { mainColor } from "../utils/constants";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default function GeoButton() {
  const dispatch = useAppDispatch();

  const handleRefetchGeo = () => {
    dispatch(fetchGeolocation());
    console.log("zapros");
  };

  return (
    <Container onClick={handleRefetchGeo}>
      <IconContext.Provider value={{ size: "2.5rem", color: mainColor }}>
        <BsGeoAlt />
      </IconContext.Provider>
    </Container>
  );
}
