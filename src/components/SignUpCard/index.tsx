import React, { FC } from "react";
// import {Formik} from "formik";
import logo_sm_clr from "../../assets/projectlink-logo-sm-clr.png"
import {StyledSignUpCard, StyledLogo} from "./styles";

// import Input from "../Input";
import Button from "../Button";
import GoogleSignInButton from "../GoogleSignInButton";
import { H1, P } from "../Typography"
import Flex, { Box } from "../Flexbox";
import { Link } from "react-router-dom";

// const initialValues = {
//   email: "",
//   password: "",
// }

const SignUpCard: FC<{}> = () =>
  <StyledSignUpCard>
    <StyledLogo src={logo_sm_clr} />
    <H1>
      Get started.
    </H1>
    <P>
      Projectlink is the fastest way to do business. Get started now for free. Already have an account? <Link to="/login">Login →</Link>
    </P>
    <Flex alignItems="center">
      <Box>
        <GoogleSignInButton />
      </Box>
      <Box>
    <P>
      Use email →
    </P>
      </Box>
    </Flex>
    {/* <HiddenForm /> */}
    {/* <Formik
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
    </Formik> */}
    <P>
      By continuing you agree to our Terms of Service.
    </P>
  </StyledSignUpCard>

export default SignUpCard;
