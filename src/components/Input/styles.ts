import styled from "styled-components";
import { themed, spacing } from "../ThemeProvider";

export const StyledInput = styled.input`
  padding: .5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  display: block;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${ themed("border") };
  :focus {
    border-color: #007eff;
    outline: none;
  }
`;
