import styled from "styled-components";
import { flexMixin } from "./GlobalStyles";

export const HeaderContainer = styled.section`
  min-height: 90vh;
  /* min-height: 95vh; */
  background: linear-gradient(
      to right,
      rgba(0, 69, 116, 0.6) 0%,
      rgba(0, 69, 116, 0) 25%,
      rgba(0, 69, 116, 0) 75%,
      rgba(0, 69, 116, 0.6) 100%
    ),
    url(src/assets/images/panorama.jpg) center/cover no-repeat;
  /* fixed */

  > section {
    ${flexMixin({ justify: "center", align: "center" })};
    margin-top: 32px;
  }
`;

export const Hero = styled.section`
  ${flexMixin({ justify: "center", align: "center" })};
  background-color: rgba(255, 255, 255, 0.1);
  height: 362px;
  width: 766px;
  border-radius: 20px;
  backdrop-filter: blur(3px);
  // 4 i 5 se bolje vidi
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  /* padding: 40px 80px; */
`;

export const Stroke = styled.img`
  height: 68px;
  width: 100%;
  margin-top: -32px;
`;
