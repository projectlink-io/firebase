import "styled-components";

/**
 * Use declaration merging to make styled-components aware of our theme
 * https://github.com/styled-components/styled-components-website/issues/392
 */
declare module "styled-components" {
  // tslint:disable-next-line:interface-name - this interface has to be named DefaultTheme
  export interface DefaultTheme {

    // color values
    background: string;
    border: string;
    paragraph: string;
    heading: string;
    textLowContrast: string;

    // style objects
    card: Card,

    // misc
    breakpoints: string[],
  }
}

interface CardStyles {
  background: string;
  borderRadius: string;
  borderColor: string;
}

export interface Card {
  regular: CardStyles;
  happy?: CardStyles;
  warning?: CardStyles;
  spicy?: CardStyles;
}
