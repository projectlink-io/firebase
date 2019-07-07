import styled from "styled-components";

export const StyledFlex = styled.div<FlexProps>`
  display: flex; 
  ${props => props.direction ? `flex-direction: ${props.direction};` : null}
  ${props => props.alignItems ? `align-items: ${props.alignItems};` : null}
  ${props => props.justifyContent ? `justify-content: ${props.justifyContent};` : null}
`;

export const StyledBox = styled.div<BoxProps>`
  ${props => props.w ? `width: ${props.w};` : null}
  ${props => props.flexGrow ? `flex-grow: ${props.flexGrow};` : null}
  ${props => props.alignSelf ? `align-self: ${props.alignSelf};` : null}
  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    ${props => props.wm ? `width: ${props.w};` : null}
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    ${props => props.wl ? `width: ${props.wl};` : null}
  }
`;

export interface FlexProps {
  direction?: "row" | "column";
  alignItems?: string;
  justifyContent?: string;
}
export interface BoxProps {
  /**
   * width
   */
  w?: string;
  /**
   * width on medium screens
   */
  wm?: string;
  /**
   * width on large screens
   */
  wl?: string;
  alignSelf?: string;
  flexGrow?: number;
}
