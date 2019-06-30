import React, {FC} from "react";
import {StyledCard, CardProps} from "./styles";

/**
 * Card
 * 
 * A versatile card component
 */
const Card: FC<CardProps> = ({ variant, children, ...rest }) => {
  return (
    <StyledCard variant={variant} { ...rest }>
      {children}
    </StyledCard>
  );
}

Card.defaultProps = {
  variant: "regular",
}

export default Card;
