import styled, { css } from "styled-components";

const Heading = styled.p`
  ${(props) =>
    props.as === "h1" &&
    css`
      color: red;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      color: blue;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      color: green;
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      color: yellow;
    `}
  ${(props) =>
    props.as === "h5" &&
    css`
      color: purple;
    `}
  ${(props) =>
    props.as === "h6" &&
    css`
      color: silver;
    `}
`;

export default Heading;
