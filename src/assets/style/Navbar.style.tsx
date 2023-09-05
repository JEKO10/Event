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
    cursor: pointer;
    z-index: 2;

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

export const FixedMenu = styled.article`
  ${flexMixin({ justify: "flex-start", align: "flex-start" })};
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.9;
  height: 100%;
  width: 100%;
  z-index: 2;
  display: none;

  @media ${devices.laptopS} {
    display: flex !important;
  }

  ul {
    ${flexMixin({ justify: "flex-start", align: "flex-start" })};
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 8rem;

    @media ${devices.tablet} {
      margin-top: 5rem;
    }

    &:last-of-type {
      @media ${devices.tablet} {
        margin-top: 2rem;
      }

      @media ${devices.mobile} {
        margin-top: 1rem;
      }
    }
  }

  li {
    margin: 0 16px;

    a {
      color: #fff;
      text-decoration: none;
      text-transform: uppercase;
      display: block;
      font-size: 1.3rem;
      text-align: left;
      margin: 1rem;
      border-radius: 5px;
      max-width: 110px;

      @media ${devices.tablet} {
        font-size: 1.1rem;
        margin: 1rem 0.5rem;
      }

      @media ${devices.mobile} {
        font-size: 0.8rem;
      }
    }
  }
`;
