import { styled } from "styled-components";
import { flexMixin, primaryColor, secondaryColor } from "./GlobalStyles";

export const NewsInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  ${flexMixin({ justify: "center", align: "flex-start" })};
  flex-direction: column;
  padding: 0.5rem 1rem;
  background: linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.85));
  color: #fff;
  transition: all 0.3s ease;

  h2 {
    margin-bottom: 0.5rem;
    font-size: 1.8rem;
    font-weight: 500;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
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
  margin: 5rem auto;

  > a {
    ${flexMixin({ justify: "center", align: "center" })};
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    &:first-of-type {
      ${flexMixin({ justify: "center", align: "center" })};
      grid-row: 1 / span 2; /* The left image spans both rows */
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
  }
`;
