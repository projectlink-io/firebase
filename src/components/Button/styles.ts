import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.333rem 0.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
`;

export interface ButtonProps {
  title: string;
}
