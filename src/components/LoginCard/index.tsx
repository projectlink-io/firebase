import React, { FC } from "react";
import {Formik} from "formik";
import logo_sm_clr from "../../assets/projectlink-logo-sm-clr.png"
import {StyledLoginCard, StyledLogo} from "./styles";

import Input from "../Input";
import Button from "../Button";
import { H1, P } from "..//Typography"

const initialValues = {
  email: "",
  password: "",
}

const LoginCard: FC<{}> = () =>
  <StyledLoginCard>
    <StyledLogo src={logo_sm_clr} />
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
              placeholder="Your email address"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email} />
            <Input type="password"
              name="password"
              placeholder="Your password"
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
  </StyledLoginCard>

export default LoginCard;
