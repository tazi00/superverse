import styled, { css, createGlobalStyle } from "styled-components";

interface FlexProps {
  type?: "vertical" | "horizontal";
  gap?: string;
}

const Flextype = {
  horizontal: css`
    flex-direction: row;
  `,
  vertical: css`
    flex-direction: column;
  `,
};
const GridType = {
  vertical: css`
    grid-template-columns: 1fr;
  `,
  horizontal: css`
    grid-template-rows: 1fr;
  `,
};

export const Flex = styled.div<FlexProps>`
  ${({ type }) => Flextype[type || "horizontal"]}
  gap: ${(props) => props.gap};
  display: flex;
`;

interface GridProps {
  type?: "vertical" | "horizontal";
  col?: string;
  align?: string;
}

export const Grid = styled.div<GridProps>`
  ${(props) => GridType[props.type || "vertical"]}
  ${(props) =>
    props.col &&
    (props.col.length === 1
      ? css`
          grid-template-columns: repeat(${props.col}, 1fr);
        `
      : css`
          grid-template-columns: ${props.col.split("/")[0]}fr ${props.col.split(
              "/"
            )[1]}fr;
        `)}
        align-items:${(props) => props.align}
  
        display: grid;
`;

interface BoxProps {
  width?: string;
  dir?: "left" | "right";
}

export const Box = styled.div<BoxProps>`
  display: block;
  width: ${(props) => props.width || "100%"};
  margin-${(props) => props.dir || "auto"};
`;

// Global default styles
const GlobalStyles = createGlobalStyle`
  ${Flex}, ${Box}, ${Grid} {
   
  }
`;

export default GlobalStyles;
