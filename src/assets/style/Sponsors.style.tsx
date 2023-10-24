import styled from "styled-components";
import { devices } from "./GlobalStyles";

export const SponsorsContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 50px;
  max-width: 80vw;
  margin: 0 auto;

  @media ${devices.laptopL} {
    max-width: 90vw;
  }

  @media ${devices.mobileS} {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  div {
    padding: 10px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;

    img {
      height: 150px;
      width: 150px;
      object-fit: contain;
    }

    p {
      max-width: 250px;
      margin: 0 auto;
    }
  }
`;
