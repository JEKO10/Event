import { styled } from "styled-components";
import {
  devices,
  flexMixin,
  primaryColor,
  secondaryColor,
} from "./GlobalStyles";

export const FooterContainer = styled.footer`
  ${flexMixin({ justify: "center", align: "center" })};
  height: 90px;
  width: 100%;
  background-color: ${secondaryColor};
  color: ${primaryColor};

  p {
    font-size: 19.2px;
    font-weight: 500;
    margin: 0 1rem;

    @media ${devices.laptopS} {
      margin-bottom: 0.5rem;
    }

    @media ${devices.mobileS} {
      font-size: 18px;
    }
  }

  @media ${devices.laptopS} {
    flex-direction: column;
    height: 140px;
  }
`;
