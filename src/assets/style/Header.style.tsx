import styled from "styled-components";
import { devices, flexMixin } from "./GlobalStyles";

export const HeaderContainer = styled.section`
  min-height: 850px;
  /* min-height: 90vh; */
  /* min-height: 95vh; */
  background: linear-gradient(
      to right,
      rgba(0, 69, 116, 0.6) 0%,
      rgba(0, 69, 116, 0) 25%,
      rgba(0, 69, 116, 0) 75%,
      rgba(0, 69, 116, 0.6) 100%
    ),
    url(/src/assets/images/panorama.jpg) center/cover no-repeat;
  /* fixed */

  @media ${devices.laptopS} {
    min-height: 90vh;
  }

  > section {
    ${flexMixin({ justify: "center", align: "center" })};
    margin-top: 32px;
    padding-bottom: 50px;

    @media ${devices.laptopS} {
      margin-top: 50px;
    }

    @media ${devices.tablet} {
      margin-top: 70px;
    }
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

  @media ${devices.laptop} {
    height: 300px;
    width: 580px;

    img {
      height: 250px;
      width: 550px;
    }
  }

  @media ${devices.laptopS} {
    height: 250px;
    width: 450px;

    img {
      height: auto;
      width: 450px;
    }
  }

  @media ${devices.tablet} {
    height: 200px;
    width: 350px;

    img {
      width: 350px;
    }
  }

  @media ${devices.mobileS} {
    height: 150px;
    width: 240px;

    img {
      width: 250px;
    }
  }
`;

export const Stroke = styled.img`
  height: 68px;
  width: 100%;
  margin-top: -32px;

  @media ${devices.laptopS} {
    width: 150%;
  }

  @media ${devices.tablet} {
    width: 200%;
  }

  @media ${devices.mobile} {
    width: 250%;
  }
`;
