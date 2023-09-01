import { styled } from "styled-components";
import { flexMixin } from "./GlobalStyles";

export const Main = styled.main`
  ${flexMixin({ justify: "space-between", align: "flex-start" })};
  margin: 4rem 0;
  padding: 0 50px;

  > section {
    &:first-of-type {
      height: 1500px;
    }

    > img {
      margin-bottom: 2rem;
    }

    > div {
      ${flexMixin({ justify: "flex-end", align: "center" })};
      width: 100%;

      > img {
        margin-bottom: 2rem;
      }
    }
  }

  > article {
    padding: 0 50px;

    h1 {
      font-size: 3.5rem;
      font-weight: 700;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 2rem;

      span {
        color: #8dc63f;
        /* text-transform: initial; */
      }
    }

    p {
      max-width: 45vw;
      font-size: 1.3rem;
    }
  }
`;

export const Side = styled.ul`
  background-color: #004574;
  position: sticky;
  top: 1rem;
  left: 4rem;
  width: 350px;
  list-style-type: none;
  border-radius: 0 15px 15px 0;
  /* border: 1px solid #000; */
  /* height: 550px; */

  li {
    padding: 10px 25px;
    font-size: 1.2rem;
    color: #fff;
    text-transform: uppercase;
    border-bottom: 1px solid #fff;
    cursor: pointer;
    transition: all 200ms ease;

    &:hover {
      color: #8dc63f;
    }

    &:last-of-type {
      border-bottom: none;
    }
  }
`;
