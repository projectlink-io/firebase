import styled from "styled-components";
import Card from "../Card";

export const StyledLogo = styled.img`
  max-width: 140px;
  padding: 0.5rem 0 3rem 0;
`;

export const StyledSignUpCard = styled(Card)`
  max-width: 420px;
  margin: auto;
  padding: 1.5rem 2rem 0.5rem 2rem;
  p {
    margin-bottom: 2rem;
  }
  button {
    margin-bottom: 2rem;
    margin-right: 1rem;
  }
`;
