import { styled } from "styled-components";
import {
  devices,
  flexMixin,
  primaryColor,
  secondaryColor,
} from "./GlobalStyles";

export const SurveyContainer = styled.section`
  background-color: ${primaryColor};
  color: #fff;
  width: 350px;
  padding: 20px;
  margin-bottom: 24px;
  list-style-type: none;
  border-radius: 15px 0 0 15px;
  /* border: 1px solid #000; */

  @media ${devices.desktop} {
    width: 300px;
  }

  @media ${devices.desktopS} {
    width: 275px;
  }

  @media ${devices.laptopL} {
    position: absolute;
    top: 37%;
    left: 30px;
    width: 284px;
    border-radius: 0 15px 15px 0;
  }

  @media ${devices.laptop} {
    top: 30%;
  }

  @media ${devices.laptopS} {
    display: none;
  }

  h2 {
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 16px;
    text-align: center;

    span {
      color: ${secondaryColor};
    }

    @media ${devices.desktop} {
      font-size: 30px;
    }
  }

  article {
    text-align: center;

    label {
      font-size: 24px;
      text-transform: uppercase;

      @media ${devices.desktop} {
        font-size: 20px;
      }
    }

    svg {
      display: none;
    }

    input {
      width: 20px;
      height: 20px;
      background-color: #fff;
      margin: 16px 16px 16px 8px;

      &[type="button"] {
        background-color: ${secondaryColor};
        color: ${primaryColor};
        height: auto;
        width: 100%;
        font-size: 24px;
        font-family: "Outfit", sans-serif;
        text-transform: uppercase;
        font-weight: 600;
        margin: 16px 0 0;
        margin-top: 16px;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;

        @media ${devices.desktop} {
          width: 80%;
        }

        @media ${devices.desktopS} {
          width: 60%;
        }
      }
    }

    > div {
      margin-bottom: 16px;
      ${flexMixin({ justify: "center", align: "center" })};
      flex-direction: column;

      > div {
        ${flexMixin({ justify: "space-around", align: "center" })};
        width: 100%;

        p {
          font-size: 20.8px;
          margin: 0 8px;
        }

        @media ${devices.desktopS} {
          flex-direction: column;

          p:first-of-type {
            margin-bottom: 5px;
          }
        }
      }
    }
  }
`;
