import styled, { css, keyframes } from "styled-components";
import { SpinnerProps } from "./";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const animationInterpolation = css<SpinnerProps>`animation: ${rotate} ${props => props.duration}ms linear infinite;`

export const StyledSpinner = styled.img<SpinnerProps>`
  ${
    props =>
      props.loading
      ? animationInterpolation
      : null
  }
`;
