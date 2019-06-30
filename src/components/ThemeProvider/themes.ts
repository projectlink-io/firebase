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

const commonThemeProperties = {
  breakpoints: ["40em", "52em"],
}

const themes: { light: DefaultTheme, dark: DefaultTheme } = {
  light: {
    ...commonThemeProperties,
    background: colors.white,
    border: "#ccc",
    paragraph: "#5d7079",
    heading: "#171717",
    textLowContrast: colors.lightGrey,
    card: {
      regular: {
        background: "#ffffff",
        borderRadius: `${themeConstants.borderRadius}px`,
        borderColor: "#ebeced",
      }
    },
  },
  dark: {
    ...commonThemeProperties,
    background: "#121212",
    border: "#7f7f7f",
    paragraph: "#5d7079",
    heading: colors.lightGrey,
    textLowContrast: colors.lightGrey,
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
