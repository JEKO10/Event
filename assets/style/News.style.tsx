import { styled } from "styled-components";
import { devices, flexMixin } from "./GlobalStyles";

export const NewsInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  ${flexMixin({ justify: "center", align: "flex-start" })};
  flex-direction: column;
  padding: 8px 16px;
  background: linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.85));
  color: #fff;
  transition: all 0.3s ease;

  h2 {
    margin-bottom: 8px;
    font-size: 24px;
    font-weight: 500;

    @media ${devices.tablet} {
      font-size: 20px;
    }

    @media ${devices.mobile} {
      font-size: 30px;
    }
  }

  p {
    font-size: 16px;
    margin-bottom: 16px;

    @media ${devices.mobile} {
      font-size: 23px;
    }
  }
`;

export const NewsSection = styled.section`
  height: 60vh;
  max-height: 100vh;
  min-height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal columns */
  grid-template-rows: 50% 50%; /* Two rows, each 50% of the height */
  gap: 10px;
  justify-items: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
  max-width: 45vw;
  margin: 80px auto;

  @media ${devices.laptopS} {
    max-width: 90vw;
  }

  @media ${devices.mobile} {
    display: block;
  }

  > a {
    ${flexMixin({ justify: "center", align: "center" })};
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    &:first-of-type {
      ${flexMixin({ justify: "center", align: "center" })};
      grid-row: 1 / span 2;
    }

    &:hover img {
      transform: scale(1.1);
    }

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      transition: all 500ms ease;
    }

    @media ${devices.mobile} {
      &:last-of-type,
      &:nth-child(2) {
        display: none;
      }
    }
  }
`;
