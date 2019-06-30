import React, { FC } from "react";
import {Formik} from "formik";
import {Flex, Box} from "@rebass/grid";
import Input from "../Input";
import Card from "../Card";

const initialValues = {
  email: "",
  password: "",
}

const LoginScreen: FC<{}> = props => {
  return (
    <Flex>
      <Box width={[1, 1/2]}>
      </Box>
      <Box width={[1, 1/2]}>
        <Card>
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
        </Card>
      </Box>
    </Flex>
  );
};

export default LoginScreen;
