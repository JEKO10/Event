import styled from "styled-components";
import { flexMixin } from "./GlobalStyles";

export const HeaderContainer = styled.section`
  ${flexMixin({ justify: "center", align: "center" })};
  min-height: 100vh;
  background: linear-gradient(
      to right,
      rgba(0, 69, 116, 0.6) 0%,
      rgba(0, 69, 116, 0) 25%,
      rgba(0, 69, 116, 0) 75%,
      rgba(0, 69, 116, 0.6) 100%
    ),
    url(src/assets/images/panorama.jpg) center/cover no-repeat;
  /* fixed */
  color: rgb(0, 69, 116);
`;

export const Hero = styled.section`
  ${flexMixin({ justify: "center", align: "center" })};
  background-color: rgba(255, 255, 255, 0.5);
  height: 362px;
  width: 766px;
  border-radius: 25px;
  /* padding: 40px 80px; */
`;
