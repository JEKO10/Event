import { styled } from "styled-components";
import { flexMixin } from "./GlobalStyles";

type RightSideProps = {
  top: number;
  margin?: number;
};

export const SidebarContainer = styled.section`
  /* position: absolute; */
  top: 5rem;
  left: 4rem;
  height: 150%;
`;

export const Side = styled.ul`
  background-color: #7fbaf4;
  position: sticky;
  top: 1rem;
  left: 4rem;
  list-style-type: none;
  border-radius: 5px;
  border: 1px solid #000;
  /* height: 550px; */

  li {
    padding: 10px 25px;
    font-size: 1.3rem;
    color: #fff;
    border-bottom: 1px solid #fff;
    cursor: pointer;
    transition: all 200ms ease;

    &:hover {
      color: #000;
    }

    &:last-of-type {
      border-bottom: none;
    }
  }
`;

export const RightSide = styled.article<RightSideProps>`
  ${flexMixin({ justify: "center", align: "center" })};
  flex-direction: column;
  /* position: absolute; */
  top: ${({ top }) => top + "rem"};
  right: 4rem;
  margin-right: ${({ margin }) => margin + "rem"};

  img {
    height: auto;
    width: 150px;
    /* width: 230px; */
    margin-bottom: 1.5rem;
  }
`;
