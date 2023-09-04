import { styled, keyframes } from "styled-components";
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
  ${flexMixin({ justify: "space-between", align: "center" })};
  background-color: #007fd5;
  padding: 20px 40px;

  @media ${devices.laptopS} {
    padding: 20px;
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
    height: 80px;

    @media ${devices.desktopS} {
      height: 70px;
    }

    @media ${devices.laptopL} {
      height: 60px;
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

  ul {
    ${flexMixin({ justify: "space-between", align: "center" })};
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

      @media ${devices.desktopS} {
        font-size: 25px;
      }

      @media ${devices.laptopL} {
        font-size: 20px;
      }

      @media ${devices.laptop} {
        font-size: 18px;
      }
    }
  }

  div p {
    color: ${secondaryColor};
    font-size: 24px;
    text-align: center;
    animation: ${changeColor} 500ms linear infinite alternate;
    display: none;

    @media ${devices.desktopS} {
      font-size: 20px;
    }

    @media ${devices.laptopL} {
      font-size: 18px;
    }

    @media ${devices.laptopS} {
      display: block;
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
`;

export const Header = styled.section`
  ${flexMixin({ justify: "space-between", align: "flex-start" })};
  margin: 80px 0;
  padding: 0 65px;

  @media ${devices.laptopL} {
    padding: 0 30px;
  }

  @media ${devices.laptopS} {
    margin: 60px 0;
  }

  @media ${devices.mobile} {
    padding: 0 20px;
  }

  img {
    @media ${devices.laptopS} {
      display: none;
    }
  }

  article {
    padding-left: 40px;
    text-align: right;

    @media ${devices.laptopS} {
      text-align: center;
    }

    @media ${devices.laptopS} {
      padding: 0 20px;
    }

    @media ${devices.tablet} {
      padding: 0;
    }

    h2 {
      font-size: 70px;
      margin-bottom: 16px;

      span {
        color: ${secondaryColor};
      }

      @media ${devices.laptopS} {
        font-size: 60px;
      }

      @media ${devices.mobile} {
        font-size: 50px;
      }

      @media ${devices.mobileS} {
        font-size: 45px;
      }
    }

    p {
      max-width: 1000px;
      font-size: 25px;
      font-weight: 600;
      line-height: 35px;

      @media ${devices.tablet} {
        max-width: 100%;
        font-size: 20px;
        line-height: 30px;
      }

      @media ${devices.mobileS} {
        font-size: 18.5px;
      }
    }
  }
`;

export const Main = styled.section`
  ${flexMixin({ justify: "space-between", align: "flex-start" })};
  padding: 80px 65px;

  @media ${devices.laptopL} {
    padding: 20px 30px 80px;
  }

  @media ${devices.laptopS} {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  @media ${devices.mobile} {
    padding: 50px 20px 80px;
  }

  p {
    max-width: 1000px;
    font-size: 25px;
    font-weight: 600;
    line-height: 35px;
    padding-right: 20px;

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
      padding: 0;
    }

    @media ${devices.mobileS} {
      font-size: 20px;
    }
  }
`;

export const Image = styled.section`
  padding: 0 20px;
  text-align: center;

  img {
    display: block;
    margin: 0 auto;

    @media ${devices.laptopL} {
      width: 90%;
    }

    @media ${devices.tablet} {
      width: 100%;
    }
  }

  p {
    max-width: 1500px;
    font-size: 25px;
    font-weight: 600;
    line-height: 35px;
    margin: 80px auto;

    @media ${devices.tablet} {
      max-width: 100%;
      font-size: 20px;
      line-height: 30px;
      margin: 50px auto;
    }

    @media ${devices.mobileS} {
      font-size: 18.5px;
      margin: 40px auto;
    }
  }
`;
