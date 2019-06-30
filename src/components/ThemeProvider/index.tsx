import React, {FC} from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { useTheme } from "../../hooks";
import GlobalStyles from "../GlobalStyles"
import themes, {themeConstants} from "./themes";

/**
 * themed
 *
 * Given the key of a property that exists on a theme, returns the value
 *
 * @param themeProp the key of a theme property
 * @returns the value of the theme property
 */
export const themed = (themeProp: keyof DefaultTheme): any => (props: { theme: DefaultTheme }) => props.theme[themeProp];

/**
 * spacing
 *
 * Keeps spacing consistent by
 * multiplying its parameter by
 * themeConstants.pixelGrid
 *
 * @param multiplier
 * @returns a numeric value
 */
export const spacing = (multiplier: number) => multiplier * themeConstants.pixelGrid;

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
       { console.log("theme", theme, themes[theme]) }
        {/* @ts-ignore.
          * styled-component typings conflict
          * with react FC typings
        */}
        {children}
        <GlobalStyles />
      </>
    </ThemeProvider>
  );
}

export default PLThemeProvider;