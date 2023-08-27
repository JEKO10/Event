import { styled } from "styled-components";
import { flexMixin } from "./GlobalStyles";

export const FooterContainer = styled.footer`
  ${flexMixin({ justify: "center", align: "center" })};
  background-color: #000;
  color: #fff;
  height: 90px;
  width: 100%;

  p {
    opacity: 0.7;
  }
`;
