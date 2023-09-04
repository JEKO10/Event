import { css, styled } from "styled-components";
import {
  devices,
  flexMixin,
  primaryColor,
  secondaryColor,
} from "./GlobalStyles";

type SidebarProps = {
  showDropdown: boolean;
};

export const Main = styled.main`
  ${flexMixin({ justify: "space-between", align: "flex-start" })};
  margin: 64px 0;
  padding: 0 50px;

  @media ${devices.desktop} {
    padding: 0 30px;
  }

  > section {
    &:first-of-type {
      height: 1500px;

      @media ${devices.laptopS} {
        display: none;
      }
    }

    > div {
      ${flexMixin({ justify: "flex-end", align: "center" })};
      width: 100%;

      > img {
        margin-bottom: 1rem;

        @media ${devices.laptopL} {
          display: none;
        }
      }
    }
  }

  > article {
    padding: 0 50px;

    @media ${devices.desktopS} {
      padding: 0 40px;
    }

    @media ${devices.laptopL} {
      padding: 0;
      padding-left: 40px;
    }

    @media ${devices.laptopS} {
      padding: 0;
    }

    h1 {
      font-size: 56px;
      font-weight: 700;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 32px;

      @media ${devices.desktopL} {
        font-size: 45px;
      }

      @media ${devices.laptopL} {
        font-size: 56px;
        text-align: right;
      }

      @media ${devices.laptopS} {
        text-align: center;
      }

      @media ${devices.tablet} {
        font-size: 35px;
      }

      @media ${devices.mobileS} {
        font-size: 28px;
      }

      span {
        color: ${secondaryColor};
        /* text-transform: initial; */
      }
    }

    p {
      max-width: 45vw;
      font-size: 20.8px;

      @media ${devices.laptopL} {
        max-width: 65vw;
        text-align: right;
      }

      @media ${devices.laptopS} {
        font-size: 19px;
        max-width: 100%;
        text-align: center;
      }

      @media ${devices.mobile} {
        font-size: 18px;
      }
    }
  }
`;

export const Side = styled.ul<SidebarProps>`
  background-color: ${primaryColor};
  position: sticky;
  top: 16px;
  left: 64px;
  width: 350px;
  list-style-type: none;
  margin-top: 1rem;
  border-radius: 0 15px 15px 0;
  /* border: 1px solid #000; */
  /* height: 550px; */

  @media ${devices.desktopL} {
    width: 316px;
  }

  @media ${devices.desktopS} {
    width: 284px;
  }

  @media ${devices.laptopS} {
    display: none;
  }

  li {
    font-size: 19.2px;
    text-transform: uppercase;
    border-bottom: 1px solid #fff;
    cursor: pointer;

    &:last-of-type {
      border-bottom: none;
    }

    @media ${devices.desktopS} {
      font-size: 17px;
    }

    a {
      display: block;
      color: #fff;
      text-decoration: none;
      padding: 10px 25px;
      transition: all 200ms ease;

      &:hover {
        color: ${secondaryColor};
      }

      @media ${devices.desktopL} {
        padding: 10px 15px;
      }
    }

    ul {
      max-height: 0;
      list-style-type: none;
      ${({ showDropdown }) =>
        showDropdown &&
        css`
          max-height: 200px;
        `}
      overflow: hidden;
      transition: max-height 500ms ease-out;

      li {
        padding: 10px 55px;

        a {
          padding: 0;
        }
      }
    }
  }
`;
