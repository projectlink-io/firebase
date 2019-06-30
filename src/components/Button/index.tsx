import React, { FC } from "react";
import {StyledButton, ButtonProps} from "./styles";

const Button: FC<ButtonProps> = ({ title }) =>
  <StyledButton>
    {title}
  </StyledButton>

export default Button;
