import { keyframes, styled } from "styled-components";
import { devices, flexMixin, secondaryColor } from "./GlobalStyles";

const changeColor = keyframes`
  0% {
    color: #fff;
  }
  100% {
    color: ${secondaryColor};
  }
`;

export const Nav = styled.nav`
  /* padding: 70px 20px; */
  ${flexMixin({ justify: "space-between", align: "center" })}
  padding: 30px 40px 50px;

  @media ${devices.mobile} {
    padding: 25px 20px 50px;
  }

  svg {
    font-size: 2rem;
    color: ${secondaryColor};
    display: none;

    @media ${devices.laptopS} {
      display: block;
    }
  }

  img {
    height: 70px;
    width: auto;

    @media ${devices.laptopL} {
      height: 50px;
    }

    @media ${devices.laptopS} {
      height: 70px;
    }

    @media ${devices.tablet} {
      height: 50px;
    }

    @media ${devices.mobileS} {
      height: 40px;
    }
  }

  div p {
    color: ${secondaryColor};
    font-size: 24px;
    text-align: center;
    animation: ${changeColor} 500ms linear infinite alternate;

    @media ${devices.desktopS} {
      font-size: 20px;
    }

    @media ${devices.laptopL} {
      font-size: 18px;
    }

    @media ${devices.tablet} {
      font-size: 16px;
    }

    @media ${devices.mobile} {
      font-size: 15px;
    }

    @media ${devices.mobileS} {
      font-size: 12px;
    }
  }

  ul {
    ${flexMixin({ justify: "space-between", align: "center" })};
    color: #fff;
    list-style-type: none;

    @media ${devices.laptopS} {
      display: none;
    }

    li {
      font-size: 28.8px;
      text-transform: uppercase;
      margin: 0 32px;
      cursor: pointer;

      a {
        color: #fff;
        text-decoration: none;
        transition: all 200ms ease;

        &:hover {
          color: ${secondaryColor};
        }
      }

      @media ${devices.desktop} {
        font-size: 25px;
      }

      @media ${devices.desktopS} {
        font-size: 20px;
      }

      @media ${devices.laptopL} {
        margin: 0 16px;
      }
    }
  }
`;
