import React from "react";
import { IconContext } from "react-icons";
import styled from "styled-components";
import { mainColor } from "../utils/constants";

interface StatProps {
  children: string;
  data: string;
  icon: React.ReactNode;
}

const StyledStat = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  padding-left: 2.2rem;

  &:nth-child(1) {
    border-bottom: 1px solid var(--secondary-font-color);
    border-right: 1px solid var(--secondary-font-color);
  }
  &:nth-child(2) {
    border-bottom: 1px solid var(--secondary-font-color);
  }
  &:nth-child(3) {
    border-right: 1px solid var(--secondary-font-color);
  }
`;

const StatInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
`;

const Title = styled.span`
  font-size: var(--font-size-s);
`;

const Data = styled.span`
  font-weight: 700;
`;

export default function Stat({ children, data, icon }: StatProps) {
  return (
    <StyledStat>
      <IconContext.Provider value={{ size: "4rem", color: mainColor }}>
        {icon}
      </IconContext.Provider>
      <StatInfo>
        <Title>{children}</Title>
        <Data>{data}</Data>
      </StatInfo>
    </StyledStat>
  );
}
