import { styled } from "styled-components";
import { flexMixin } from "./GlobalStyles";

export const Nav = styled.nav`
  ${flexMixin({ justify: "space-between", align: "center" })};
  padding: 15px 50px;
  background-color: #7fbaf4;

  img {
    height: auto;
    width: 50px;
  }

  ul {
    ${flexMixin({ justify: "center", align: "center" })};
    list-style-type: none;
    color: #fff;

    li {
      margin: 0 30px;
      font-size: 1.2rem;
      cursor: pointer;

      a {
        color: #fff;
        text-decoration: none;
        transition: all 500ms ease;

        &:hover {
          color: #000;
        }
      }
    }
  }
`;

export const Flags = styled.div`
  ${flexMixin({ justify: "center", align: "center" })};

  img {
    height: auto;
    width: 40px;
    cursor: pointer;

    &:first-of-type {
      margin-right: 0.5rem;
    }
  }
`;
