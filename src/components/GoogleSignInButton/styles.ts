import styled from "styled-components";

export const StyledButton = styled.button`
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;

  color: ${props => props.theme.textHighContrast};
  background: transparent;
  box-shadow: 0 0 14px 0 rgba(0,0,0,0.1);

  padding: 0.5rem 1rem;
  margin-bottom: 1rem;

  font-size: 1rem;
  letter-spacing: 0.0333rem;
  transition: .5s all;

  &:hover {
    box-shadow: 0px 0px 13px 4px rgba(0, 0, 0, 0.2);
    transition: .5s all;
  }
`;

export interface GoogleSignInButtonProps {
}
