import React from "react";
import styled from "styled-components";
import { themed } from "../ThemeProvider";

const typescale = [0.563, 0.75, 1, 1.333, 1.777, 2.369, 3.157, 4.209, 5.61];

export const H1 = styled.h1`
  color: ${themed("heading")};
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: ${ typescale[4] }rem;
  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    font-size: ${ typescale[5]}rem;
  }
`;

export const P = styled.p`
  color: ${themed("paragraph")};
  margin-bottom: 1rem;
  font-size: ${typescale[2]}rem;
  letter-spacing: 0.03rem;
`;

export const SmallPrint = styled.p`
  color: ${themed("paragraph")};
  font-size: ${typescale[0]}rem;
`;

export const TextLink = styled.a`
  color: #0070f3;
`;
