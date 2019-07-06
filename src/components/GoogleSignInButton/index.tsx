import React, { FC } from "react";
import {StyledButton, GoogleSignInButtonProps} from "./styles";

const GoogleSignInButton: FC<GoogleSignInButtonProps> = () =>
  <StyledButton>
    Sign in with Google
  </StyledButton>

export default GoogleSignInButton;
