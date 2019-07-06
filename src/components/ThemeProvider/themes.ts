import {DefaultTheme} from "styled-components";

export const themeConstants = {
  borderRadius: 3,
  pixelGrid: 8,
}

export const colors = {
  white: "#ffffff",
  nearWhite: "#fafafa",
  lightestGrey: "#ebeced",
  lightGrey: "#ccc",
  darkGrey: "#171717",
  black: "#000",
  uiBlue: "#0070f3",
};

const commonThemeProperties = {
  breakpoints: ["40em", "52em"],
  borderRadius: `${themeConstants.borderRadius}px`,
}

const themes: { light: DefaultTheme, dark: DefaultTheme } = {
  light: {
    ...commonThemeProperties,
    background: colors.white,
    borderColor: colors.lightestGrey,
    paragraph: "#5d7079",
    heading: colors.darkGrey,
    textLowContrast: colors.lightestGrey,
    textHighContrast: colors.darkGrey,
    buttonPrimary: colors.uiBlue,
    buttonSuccess: "#2ED06E",
    card: {
      regular: {
        background: "#ffffff",
        borderRadius: `${themeConstants.borderRadius}px`,
        borderColor: colors.lightestGrey,
      }
    },
  },
  dark: {
    ...commonThemeProperties,
    background: "#121212",
    borderColor: colors.darkGrey,
    paragraph: "#5d7079",
    heading: colors.lightGrey,
    textLowContrast: colors.lightGrey,
    textHighContrast: colors.nearWhite,
    buttonPrimary: "#00C6FE",
    buttonSuccess: "#2ED06E",
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
