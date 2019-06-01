import React, { FC, ImgHTMLAttributes, useState,useEffect } from "react";
import ProductLinkLogo from "../../assets/logo.svg"
import { StyledSpinner } from "./styles";

const ANIMATION_DURATION = 2000;

const Spinner: FC<SpinnerProps> = props =>
  <StyledSpinner
    alt={props.loading ? "loading-spinner" : "productlink-logo"}
    { ...props } />

export interface SpinnerProps extends ImgHTMLAttributes<any> {
  /**
   * animation-duration in ms
   */
  duration?: number;
  loading?: boolean;
}

Spinner.defaultProps = {
  duration: ANIMATION_DURATION,
  loading: true,
  src: ProductLinkLogo,
};

export default Spinner;
