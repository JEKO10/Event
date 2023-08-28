import { styled } from "styled-components";
import { flexMixin } from "./GlobalStyles";

export const FooterContainer = styled.footer`
  ${flexMixin({ justify: "center", align: "center" })};
  height: 90px;
  width: 100%;
  background-color: #000;
  color: #fff;

  p {
    opacity: 0.7;
  }
`;
