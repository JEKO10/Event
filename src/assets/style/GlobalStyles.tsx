import React from "react";
import { createGlobalStyle, css } from "styled-components";

export const primaryColor = "#004574";
export const secondaryColor = "#8dc63f";
export const primaryFont = "Hanken Grotesk, sans-serif";
interface IFlexMixin {
  justify:
    | "center"
    | "space-between"
    | "space-evenly"
    | "space-around"
    | "flex-start"
    | "flex-end"
    | "stretch";
  align:
    | "center"
    | "flex-start"
    | "flex-end"
    | "stretch"
    | "self-start"
    | "self-end";
}

export const flexMixin = ({ justify, align }: IFlexMixin) => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
`;

export const GlobalStyles = React.memo(
  createGlobalStyle`${css`
    * {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
    }

    body {
      font-family: "Outfit", sans-serif;
      overflow-x: hidden;
    }
  `}`
);
