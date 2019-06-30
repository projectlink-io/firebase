import styled from "styled-components";
import { themed } from "../ThemeProvider";

export const StyledInput = styled.input`
  padding: .5rem;
  font-size: 1rem;
  display: block;
  border-radius: 4px;
  border: 1px solid ${ themed("border") };
  :focus {
    border-color: #007eff;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 0 3px rgba(0, 126, 255, 0.1);
    outline: none;
  }
`;
