import React, { FC } from "react";

import LoginCard from "../../components/LoginCard";
import SignUpCard from "../../components/SignUpCard";
import {Box} from "../../components/Flexbox";

import { StyledImage, StyledLoginScreen } from "./styles";
import { Route, Switch } from "react-router";

const LoginScreen: FC<{}> = () => {
  return (
    <StyledLoginScreen justifyContent="center">
      <StyledImage wl="36.666%">
      </StyledImage>
      <Box flexGrow={1}>
        <Switch>
          <Route path="/login" component={LoginCard} />
          <Route path="/signup" component={SignUpCard} />
        </Switch>
      </Box>
    </StyledLoginScreen>
  );
};

export default LoginScreen;
