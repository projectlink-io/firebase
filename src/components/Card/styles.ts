import styled from "styled-components";
import {spacing} from "../ThemeProvider";
import { Card } from "../../styled";

export const StyledCard = styled.div<CardProps>(props => ({
  padding: spacing(2),
  borderWidth: 1,
  borderStyle: "solid",
  ...props.theme.card[props.variant || "regular"],
}));

export type CardVariant = keyof Card;
export interface CardProps {
  variant?: CardVariant;
}
