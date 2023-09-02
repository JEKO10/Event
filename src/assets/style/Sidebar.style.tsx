import { css, styled } from "styled-components";
import { flexMixin, primaryColor, secondaryColor } from "./GlobalStyles";

type SidebarProps = {
  showDropdown: boolean;
};

export const Main = styled.main`
  ${flexMixin({ justify: "space-between", align: "flex-start" })};
  margin: 64px 0;
  padding: 0 50px;

  > section {
    &:first-of-type {
      height: 1500px;
    }

    > div {
      ${flexMixin({ justify: "flex-end", align: "center" })};
      width: 100%;

      > img {
        margin-bottom: 32px;
      }
    }
  }

  > article {
    padding: 0 50px;

    h1 {
      font-size: 56px;
      font-weight: 700;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 32px;

      span {
        color: ${secondaryColor};
        /* text-transform: initial; */
      }
    }

    p {
      max-width: 45vw;
      font-size: 20.8px;
    }
  }
`;

export const Side = styled.ul<SidebarProps>`
  background-color: ${primaryColor};
  position: sticky;
  top: 16px;
  left: 64px;
  width: 350px;
  list-style-type: none;
  margin-top: 1rem;
  border-radius: 0 15px 15px 0;
  /* border: 1px solid #000; */
  /* height: 550px; */

  li {
    font-size: 19.2px;
    text-transform: uppercase;
    border-bottom: 1px solid #fff;
    cursor: pointer;

    &:last-of-type {
      border-bottom: none;
    }

    a {
      display: block;
      color: #fff;
      text-decoration: none;
      padding: 10px 25px;
      transition: all 200ms ease;

      &:hover {
        color: ${secondaryColor};
      }
    }

    ul {
      max-height: 0;
      list-style-type: none;
      ${({ showDropdown }) =>
        showDropdown &&
        css`
          max-height: 200px;
        `}
      overflow: hidden;
      transition: max-height 500ms ease-out;

      li {
        padding: 10px 55px;

        a {
          padding: 0;
        }
      }
    }
  }
`;
