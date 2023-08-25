import { styled } from "styled-components";

export const Side = styled.ul`
  background-color: #7fbaf4;
  position: absolute;
  top: 10rem;
  left: 4rem;
  list-style-type: none;
  border-radius: 5px;
  border: 1px solid #000;

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
