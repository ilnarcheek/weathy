import styled from "styled-components";

const StyledLogo = styled.p`
  font-size: var(--font-size-l);
  color: var(--violet-color);
  font-weight: 800;
`;

export default function Logo() {
  return <StyledLogo>Weathy</StyledLogo>;
}
