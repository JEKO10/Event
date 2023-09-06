import { styled } from "styled-components";
import { devices, flexMixin } from "./GlobalStyles";

export const WorkGallery = styled.article`
  ${flexMixin({ justify: "space-between", align: "center" })};
  margin: 5rem 0;
  padding: 0 65px;

  img {
    height: 350px;
    width: 450px;
  }
`;

export const WorkParagraph = styled.p`
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  line-height: 35px;
  margin-bottom: 10rem;
  padding: 0 65px;

  @media ${devices.desktopS} {
    max-width: 800px;
  }

  @media ${devices.laptopL} {
    font-size: 22px;
    max-width: 700px;
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
