import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Auth from "../../services/auth";

import LoginCard from "../../components/LoginCard";
import SignUpCard from "../../components/SignUpCard";
import { Box } from "../../components/Flexbox";

import { StyledImage, StyledLoginScreen } from "./styles";


const SignedOut: FC<{}> = () => {
  const r = Auth.currentUserIsReturning()

  return (
    <Router>
      <Redirect to={r ? "login" : "signup"} />
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
    </Router>
  );
};

export default SignedOut;
