import styled from "styled-components";
import { useAppDispatch } from "../store/hooks";
import { fetchTimezone } from "../store/reducers/timezoneSlice";
import { setGeolocation } from "../store/reducers/geoSlice";

interface SearchListItemProps {
  data: {
    value: string;
    data: {
      geo_lat: number;
      geo_lon: number;
    };
  };
  setQuery: (query: string) => void;
}

interface Place {
  geo_lat: number;
  geo_lon: number;
}

const StyledListItem = styled.li`
  padding: 0.5rem 0 0.5rem;
  border-bottom: 1px solid var(--light-color);
  cursor: pointer;
`;

export default function SearchListItem({
  data,
  setQuery,
}: SearchListItemProps) {
  const dispatch = useAppDispatch();

  const handleClickSearchItem = async (place: Place) => {
    setQuery("");
    const { geo_lat: lat, geo_lon: lng } = place;
    dispatch(setGeolocation({ lat, lng }));
    await dispatch(fetchTimezone({ lat, lng }));
  };

  return (
    <StyledListItem onClick={() => handleClickSearchItem(data.data)}>
      {data.value}
    </StyledListItem>
  );
}
