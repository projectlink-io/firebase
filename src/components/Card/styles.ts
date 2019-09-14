import styled from "styled-components";

export const StyledCard = styled.div<any>(props => ({
  padding: 16,
  borderWidth: 1,
  borderStyle: "solid",
  ...props.theme.card[props.variant || "regular"],
}));
