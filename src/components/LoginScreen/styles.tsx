import styled from "styled-components";
import Flex, {Box} from "../Flexbox";
import img from "../../assets/projectlink-factory.png"
import { spacing } from "../ThemeProvider";
import Card from "../Card";

export const StyledLoginScreen = styled(Flex)`
  padding: ${spacing(5)};
  align-items: center;
  height: 100vh;
`;

export const StyledLogo = styled.img`
  max-width: 160px;
  padding: 0.5rem 0 2rem 0;
`;

export const StyledImage = styled(Box)`
  background-image: url(${img});
  background-position: 50% 50%;
  background-size: cover;
  height: 100%;
`;

export const LoginCard = styled(Card)`
  max-width: 400px;
  margin: auto;
  padding: ${spacing(3)}px ${ spacing(4) }px ${spacing(1)}px ${spacing(4)}px;
  p {
    margin-bottom: 2rem;
  }
`;
