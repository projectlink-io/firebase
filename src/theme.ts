/**
 * system-ui.com
 * 
 * Theme-ui is better than styled-components because
 * boilerplate styled-components for small, descrete
 * styles is a worse experience than using sx prop.
 * sx prop allows us to quickly refer to theme
 * defaults.
 * 
 * Theme-ui still allows you to make styled components
 * but in a way that is more extensible.
 */
import {SystemStyleObject} from "@styled-system/css";
import {Theme} from "theme-ui";

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
function spacing(multiplier: number) {
  const pixelGrid = 8;
  return multiplier * pixelGrid
};

const theme: Theme = {
  initialColorMode: "light",
}

theme.fontSizes = [
  12, 14, 16, 20, 24, 32, 48, 56
]

theme.fonts = {
  default: `"Inter", -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;`,
}

theme.space = [
  spacing(0),
  spacing(0.5),
  spacing(1),
  spacing(2),
  spacing(3),
  spacing(4),
  spacing(5),
  spacing(6),
  spacing(7),
  spacing(8),
],

theme.colors = {
  background: "white",
  text: "black",
  modes: {
    dark: {
      background: "black",
      text: "white",
    },
  },
}

theme.radii = {
  small: 3,
  large: 7,
  default: 7,
}

theme.breakpoints = ["40em", "52em", "64em"]

theme.buttons = {
  primary: {
    bg: '',
    color: '',
    boxShadow: '',
    '&:hover': {

    },
  },
}

export default theme;

/** typings */
export type ButtonVariants = "ghost" | "primary" | "secondary";
