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

const sizes = {
  mobile: "480px",
  tablet: "768px",
  laptopS: "992px",
  laptop: "1024px",
  laptopL: "1200px",
  desktopS: "1440px",
  desktop: "1600px",
  desktopL: "1920px",
};

export const devices = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptopS: `(max-width: ${sizes.laptopS})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktopS: `(max-width: ${sizes.desktopS})`,
  desktop: `(max-width: ${sizes.desktop})`,
  desktopL: `(max-width: ${sizes.desktopL})`,
};
