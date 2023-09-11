import { styled } from "styled-components";
import { devices, flexMixin } from "./GlobalStyles";

export const WorkGallery = styled.article`
  ${flexMixin({ justify: "space-between", align: "center" })};
  flex-wrap: wrap;
  margin: 5rem 0;
  padding: 0 65px;

  @media ${devices.desktopS} {
    padding: 0 35px;
  }

  @media ${devices.laptopL} {
    flex-direction: column;
  }

  @media ${devices.mobile} {
    padding: 0 15px;
  }

  img {
    height: 350px;
    width: 450px;
    margin: 0 0.5rem;

    @media ${devices.desktop} {
      height: 320px;
      width: 420px;
    }

    @media ${devices.desktopS} {
      height: 250px;
      width: 350px;
    }

    @media ${devices.laptopL} {
      margin: 0 0 2rem 0;
      height: auto;
      width: 60%;
    }

    @media ${devices.laptopS} {
      width: 100%;
    }
  }
`;

export const WorkParagraph = styled.p`
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  line-height: 35px;
  margin-bottom: 5rem;
  padding: 0 65px;

  /* @media ${devices.desktopS} {
    max-width: 800px;
  } */

  @media ${devices.laptopL} {
    font-size: 22px;
    /* max-width: 700px; */
  }

  @media ${devices.laptopS} {
    text-align: center;
    max-width: 100%;
    margin-top: 50px;
    padding: 0 30px;
  }

  @media ${devices.mobile} {
    padding: 0 20px;
  }

  @media ${devices.mobileS} {
    font-size: 20px;
  }
`;
