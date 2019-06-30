import styled from "styled-components";
import Flex, {Box} from "../../components/Flexbox";
import img from "../../assets/projectlink-factory.png"
import { spacing } from "../../components/ThemeProvider";
import Card from "../../components/Card";

export const StyledLoginScreen = styled(Flex)`
  padding: ${spacing(5)};
  align-items: center;
  height: 100vh;
`;

export const StyledImage = styled(Box)`
  background-image: url(${img});
  background-position: 50% 50%;
  background-size: cover;
  height: 100%;
`;
