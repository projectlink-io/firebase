import React, { FC } from "react";
import { StyledFlex, FlexProps, StyledBox, BoxProps } from "./styles";

// export const Flex: FC<FlexProps> = ({children, ...rest}) =>
//   <StyledFlex { ...rest }>
//     {children}
//   </StyledFlex>

/**
 * Column
 * 
 * Must be in a Row. supports styled-system
 * width prop.
 */
export const Column: FC<any> = ({ children, width, ...rest }) =>
  <div { ...rest }
    sx={{
      display: "flex",
      justifyContent: "center",
      width,
    }}>
    {children}
  </div>

/**
 * Row
 * 
 * Wraps columns.
 */
export const Box: FC<BoxProps> = ({children, ...rest}) =>
  <StyledBox { ...rest }>
    {children}
  </StyledBox>



export default Flex;
