import React, {FC} from "react";
import {StyledCard} from "./styles";

/**
 * Card
 * 
 * A versatile card component
 */
const Card: FC<any> = ({ variant, children, ...rest }) => {
  return (
    <div
     sx={{
      border: '1px solid #777',
      padding: 16,
      variant: `cards.${variant}`,
     }}>
      {children}
    </div>
  );
}

Card.defaultProps = {
  variant: 'default',
}

interface CardProps {
  title: string;
  variant: CardVariants,
}

export default Card;
