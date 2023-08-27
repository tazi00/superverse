import styled, { css } from "styled-components";

interface ButtonProps {
  size: "small" | "medium" | "large";
  mode: "primary" | "secondary" | "tertiary";
}

const sizeStyles: { [key in ButtonProps["size"]]: ReturnType<typeof css> } = {
  small: css`
    padding: 10px;
  `,
  medium: css`
    padding: 20px;
  `,
  large: css`
    padding: 30px;
  `,
};

const modeStyles: { [key in ButtonProps["mode"]]: ReturnType<typeof css> } = {
  primary: css`
    background-color: red;
    color: white;
  `,
  secondary: css`
    background-color: blue;
    color: white;
  `,
  tertiary: css`
    background-color: orange;
    color: white;
  `,
};

const Button = styled.button<ButtonProps>`
  border: 1px solid #444;
  border-radius: 5px;
  cursor: pointer;
  ${({ size }) => sizeStyles[size]}
  ${({ mode }) => modeStyles[mode]}
`;

export default Button;
