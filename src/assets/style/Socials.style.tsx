import { styled } from "styled-components";
import { flexMixin } from "./GlobalStyles";

export const SocialsContainer = styled.section`
  background: rgb(0, 127, 213);
  background: linear-gradient(
    90deg,
    rgba(0, 127, 213, 1) 25%,
    rgba(0, 127, 213, 1) 25%,
    rgba(0, 69, 116, 1) 50%
  );
  ${flexMixin({ justify: "space-between", align: "center" })};
  height: 146px;
  width: 796px;
  margin: 5rem auto 5rem;
  padding: 20px 50px;
  border-radius: 50px;

  > img {
    height: 100px;
    width: 172px;
  }

  a {
    margin: 0 0.5rem;
    cursor: pointer;
  }
`;
