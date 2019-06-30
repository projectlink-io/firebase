import React from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from '../../hooks';
import { FC } from "react";

export const themes = {
  light: {
    background: "white",
  },
  dark: {
    background: "black",
  }
}

/**
 * PLThemeProvider
 *
 * Provider component that stores and keeps a theme
 */
const PLThemeProvider: FC<{}> = ({children, ...rest}) => {
  const [theme] = useTheme();

  return (
    <ThemeProvider theme={themes[theme]} { ...rest }>
      <>
        {/* @ts-ignore.
          * styled-component typings conflict
          * with react FC typings
          */}
        {children}
      </>
    </ThemeProvider>
  );
}

export default PLThemeProvider;