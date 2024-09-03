import styled from "styled-components";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import GeoButton from "./GeoButton";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <RightSide>
        <Searchbar />
        <GeoButton />
      </RightSide>
    </StyledHeader>
  );
}
