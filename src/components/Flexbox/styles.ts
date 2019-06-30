import styled from "styled-components";

export const StyledFlex = styled.div<FlexProps>`
  display: flex; 
  ${props => props.direction ? `flex-direction: ${props.direction};` : null}
  ${props => props.alignItems ? `align-items: ${props.alignItems};` : null}
  ${props => props.justifyContent ? `justify-content: ${props.justifyContent};` : null}
`;

export const StyledBox = styled.div<BoxProps>`
  width: 100%;
  ${props => props.flexGrow ? `flexGrow: ${props.flexGrow};` : null}
  ${props => props.alignSelf ? `alignSelf: ${props.alignSelf};` : null}
  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    ${props => props.w ? `width: ${props.w};` : null}
  }
`;

export interface FlexProps {
  direction?: "row" | "column";
  alignItems?: string;
  justifyContent?: string;
}
export interface BoxProps {
  w?: string;
  alignSelf?: string;
  flexGrow?: number;
}
