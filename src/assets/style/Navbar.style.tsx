import { keyframes, styled } from "styled-components";
import { flexMixin, secondaryColor } from "./GlobalStyles";

const changeColor = keyframes`
  0% {
    color: #fff;
  }
  100% {
    color: ${secondaryColor};
  }
`;

export const Nav = styled.nav`
  /* padding: 70px 20px; */
  ${flexMixin({ justify: "space-between", align: "center" })}
  padding: 30px 40px 50px;

  img {
    height: 70px;
    width: auto;
  }

  div {
    p {
      color: ${secondaryColor};
      font-size: 1.5rem;
      text-align: center;
      animation: ${changeColor} 500ms linear infinite alternate;
    }
  }

  ul {
    ${flexMixin({ justify: "space-between", align: "center" })};
    color: #fff;
    list-style-type: none;

    li {
      font-size: 1.8rem;
      text-transform: uppercase;
      margin: 0 2rem;
      cursor: pointer;
      transition: all 200ms ease;

      &:hover {
        color: ${secondaryColor};
      }
    }
  }
`;
