import { useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  cleanSearchQuery,
  fetchSearchResults,
  setSearchQuery,
} from "../store/reducers/searchSlice";
import SearchListItem from "./SearchListItem";

const Container = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  border-radius: var(--border-radius-s);
  box-shadow: var(--box-shadov-s);
  padding: 0.7rem;
  font-size: var(--font-size-s);
  border: none;
  width: 25rem;

  &::placeholder {
    color: var(--secondary-font-color);
  }
`;

const SearchList = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 150%;
  max-height: 40rem;
  margin-top: 1rem;
  padding: 1rem;
  background-color: white;
  border-radius: var(--border-radius-s);
  box-shadow: var(--box-shadov-s);
  overflow-y: scroll;
  z-index: 2;
`;

export default function Searchbar() {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();
  const { results } = useAppSelector((state) => state.search);

  const handleInputQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    dispatch(setSearchQuery(query));
    if (query.length >= 2) {
      dispatch(fetchSearchResults(query));
    }

    if (query.length === 0) {
      dispatch(cleanSearchQuery());
    }
  };

  return (
    <Container>
      <SearchInput
        value={query}
        onChange={(e) => handleInputQuery(e)}
        placeholder="Введите название города..."
      />
      {results.suggestions.length > 0 && query.length > 2 && (
        <SearchList>
          {results.suggestions.map((result) => (
            <SearchListItem
              key={result.value}
              data={result}
              setQuery={setQuery}
            />
          ))}
        </SearchList>
      )}
    </Container>
  );
}
