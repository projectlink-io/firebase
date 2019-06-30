import styled from "styled-components";
import Card from "../Card";

export const StyledLogo = styled.img`
  max-width: 140px;
  padding: 0.5rem 0 3rem 0;
`;

export const StyledLoginCard = styled(Card)`
  max-width: 400px;
  margin: auto;
  padding: 1.5rem 2rem 0.5rem 2rem;
  p {
    margin-bottom: 3rem;
  }
  button {
    margin-bottom: 3rem;
  }
  & p:last-child {
    margin-bottom: 1rem;
  }
`;
