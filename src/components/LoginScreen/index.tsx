import React, { FC } from "react";
import {Formik} from "formik";
import logo_sm_blk from "../../assets/projectlink-logo-sm-blk.png"

import {Box} from "../Flexbox";
import Input from "../Input";
import Button from "../Button";
import { H1, P } from "../Typography"

import { StyledImage, StyledLoginScreen, LoginCard, StyledLogo } from "./styles";

const initialValues = {
  email: "",
  password: "",
}

const LoginScreen: FC<{}> = props => {
  return (
    <StyledLoginScreen>
      <StyledImage w="50%">
      </StyledImage>
      <Box w="50%">
        <LoginCard>
          <StyledLogo src={logo_sm_blk} />
          <H1>
            Welcome back.
          </H1>
          <P>
            New to Projectlink? Sign up →
          </P>
          <Formik
            initialValues={initialValues}
            onSubmit={() => console.log("submit form")}>
            {
              props =>
                <>
                  <Input type="email"
                    name="email"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.email} />
                  <Input type="password"
                    name="password"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.password} />
                </>
            }
          </Formik>
          <Button title="Sign in"/>
          <P>
            By continuing you agree to our Terms of Service.
          </P>
        </LoginCard>
      </Box>
    </StyledLoginScreen>
  );
};

export default LoginScreen;
