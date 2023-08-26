import React from "react";
import { createGlobalStyle, css, styled } from "styled-components";

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
      font-family: "Bricolage Grotesque", sans-serif;
    }
  `}`
);

export const RightSide = styled.article`
  ${flexMixin({ justify: "center", align: "center" })};
  flex-direction: column;
  position: absolute;
  top: 5rem;
  right: 4rem;

  img {
    height: auto;
    width: 150px;
    margin: 1.5rem 0;
  }
`;
