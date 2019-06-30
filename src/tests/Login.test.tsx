import React from "react";
import { render } from "@testing-library/react";
import { LoginForm } from "../components/LoginForm";

test("google login", () => {
  const handleClick = jest.fn();

  const { getByText } = render(
    <LoginForm />,
  )

  const googleSignInButton = getByText("Sign in with google");
  googleSignInButton.click();

  expect(handleClick).toHaveBeenCalledTimes(1);
})

test("email login", () => {
  const handleSubmit = jest.fn();

  const { getByLabelText } = render(
    <LoginForm />,
  )

  const emailInput = getByLabelText("email") as HTMLInputElement;
  emailInput.value = "test@test.ca";
  const passwordInput = getByLabelText("password") as HTMLInputElement;
  passwordInput.value = "test123";
  const submitButton = getByLabelText("submit");
  submitButton.click();

  expect(handleSubmit).toHaveBeenCalledTimes(1);
})
