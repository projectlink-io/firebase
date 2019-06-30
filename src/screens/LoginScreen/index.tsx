import React, { FC } from "react";

import LoginCard from "../../components/LoginCard";
import {Box} from "../../components/Flexbox";

import { StyledImage, StyledLoginScreen } from "./styles";
import { Route, Switch } from "react-router";

const LoginScreen: FC<{}> = () => {
  return (
    <StyledLoginScreen>
      <StyledImage w="50%">
      </StyledImage>
      <Box w="50%">
        <Switch>
          <Route path="/login" component={LoginCard} />
        </Switch>
      </Box>
    </StyledLoginScreen>
  );
};

export default LoginScreen;
