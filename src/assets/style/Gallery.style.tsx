import styled from "styled-components";
import { secondaryColor } from "./GlobalStyles";

export const ImgContainer = styled.article`
  max-width: 90vw;
  margin: 0 auto;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(386px, 1fr));
  grid-auto-rows: 300px;
  gap: 15px;

  > div {
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 300ms ease;

    &:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }
`;

export const FullImg = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
  text-align: center;

  svg {
    position: absolute;
    top: 2rem;
    left: 2rem;
    font-size: 2rem;
    color: ${secondaryColor};
    z-index: 2;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
