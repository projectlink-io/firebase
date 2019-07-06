import styled from "styled-components";
import { themed, spacing } from "../ThemeProvider";

export const StyledInput = styled.input`
  padding: .5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  display: block;
  width: 100%;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${ themed("borderColor") };
  :focus {
    border-color: #007eff;
    outline: none;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${props => props.theme.textLowContrast};
  }
  :-ms-input-placeholder {
    color: ${props => props.theme.textLowContrast};
  }
`;
