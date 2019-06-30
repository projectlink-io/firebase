import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  border-radius: ${props => props.theme.borderRadius};

  color: white;
  background: ${props => props.theme.buttonSuccess};

  padding: 0.5rem 0.75rem;
  margin-bottom: 1rem;

  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.0333rem;
`;

export interface ButtonProps {
  title: string;
}
