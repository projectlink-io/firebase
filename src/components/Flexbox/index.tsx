import React, { FC } from "react";
import { StyledFlex, FlexProps, StyledBox, BoxProps } from "./styles";

export const Flex: FC<FlexProps> = ({children, ...rest}) =>
  <StyledFlex { ...rest }>
    {children}
  </StyledFlex>

export const Box: FC<BoxProps> = ({children, ...rest}) =>
  <StyledBox { ...rest }>
    {children}
  </StyledBox>


export default Flex;
