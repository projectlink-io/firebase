import {DefaultTheme} from "styled-components";

export const themeConstants = {
  borderRadius: 4,
  pixelGrid: 8,
}

export const colors = {
  white: "#ffffff",
  nearWhite: "#fafafa",
  lightestGrey: "ebeced",
  lightGrey: "#ccc",
  darkGrey: "#7f7f7f"
};

const themes: { light: DefaultTheme, dark: DefaultTheme } = {
  light: {
    background: "#fafafa",
    border: "#ccc",
    card: {
      regular: {
        background: "#ffffff",
        borderRadius: `${themeConstants.borderRadius}px`,
        borderColor: "#ebeced",
      }
    },
  },
  dark: {
    background: "#121212",
    border: "#7f7f7f",
    card: {
      regular: {
        background: "#121212",
        borderRadius: `${themeConstants.borderRadius}px`,
        borderColor: "#7f7f7f",
      },
    },
  },
};

export default themes;
