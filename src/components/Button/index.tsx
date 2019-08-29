/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from "react";

const Button: FC<ButtonProps> = ({ title }) =>
  <button
    sx={{
      border: "none",
      borderRadius: "small",

      color: ,
    }}>
    {title}
  </button>

interface ButtonProps {
  title: string;
}

// export const StyledButton = styled.button`
//   border: none;
//   border-radius: ${props => props.theme.borderRadius};
//   cursor: pointer;

//   color: white;
//   background: ${props => props.theme.buttonPrimary};
//   box-shadow: 0 4px 14px 0 rgba(0,118,255,0.39);

//   padding: 0.5rem 1rem;
//   margin-bottom: 1rem;

//   font-size: 1rem;
//   letter-spacing: 0.0333rem;
//   transition: .5s all;

//   &:hover {
//     box-shadow: 0 4px 14px 0 rgba(0,118,255,0.8);
//     transition: .5s all;
//   }
// `;
export default Button;
