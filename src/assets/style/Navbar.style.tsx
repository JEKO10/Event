import { styled } from "styled-components";
import { flexMixin } from "./GlobalStyles";

export const Nav = styled.nav`
  padding: 70px 20px;

  ul {
    ${flexMixin({ justify: "space-around", align: "center" })};
    color: #fff;
    list-style-type: none;

    li {
      font-size: 2rem;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
`;
