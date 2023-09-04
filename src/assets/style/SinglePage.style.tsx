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

  article {
    text-align: right;

    h2 {
      font-size: 40px;
      margin-bottom: 16px;

      span {
        color: ${secondaryColor};
      }
    }

    p {
      max-width: 1000px;
      font-size: 25px;
      font-weight: 600;
      line-height: 35px;
    }
  }
`;

export const Main = styled.section`
  ${flexMixin({ justify: "space-between", align: "flex-start" })};
  padding: 80px 65px;

  p {
    max-width: 1000px;
    font-size: 25px;
    font-weight: 600;
    line-height: 35px;
  }
`;

export const Image = styled.section`
  text-align: center;

  img {
    display: block;
    margin: 0 auto;
  }

  p {
    max-width: 1500px;
    font-size: 25px;
    font-weight: 600;
    line-height: 35px;
    margin: 80px auto;
  }
`;
