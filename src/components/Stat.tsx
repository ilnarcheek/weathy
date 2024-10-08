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

  @media (max-width: 860px) {
    padding-left: 4rem;

    &:nth-child(1) {
      border-right: none;
      border-bottom: 1px solid var(--secondary-font-color);
    }
    &:nth-child(2) {
      border-bottom: 1px solid var(--secondary-font-color);
    }
    &:nth-child(3) {
      border-right: none;
      border-bottom: 1px solid var(--secondary-font-color);
    }
  }

  @media (max-width: 760px) {
    padding-left: 3rem;
  }

  @media (max-width: 660px) {
    &:nth-child(1) {
      border-bottom: 1px solid var(--secondary-font-color);
      border-right: 1px solid var(--secondary-font-color);
    }
    &:nth-child(2) {
      border-bottom: 1px solid var(--secondary-font-color);
    }
    &:nth-child(3) {
      border-bottom: none;
      border-right: 1px solid var(--secondary-font-color);
    }
  }

  @media (max-width: 600px) {
    padding-left: 2rem;
  }

  @media (max-width: 530px) {
    padding-left: 6rem;
  }

  @media (max-width: 400px) {
    padding-left: 4rem;
  }
`;

const StatInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
`;

const Title = styled.span`
  font-size: var(--font-size-s);

  @media (max-width: 530px) {
    font-size: var(--font-size-m);
  }
`;

const Data = styled.span`
  font-weight: 700;

  @media (max-width: 530px) {
    font-size: var(--font-size-l);
  }
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
