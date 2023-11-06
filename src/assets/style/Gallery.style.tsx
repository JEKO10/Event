import styled from "styled-components";
import { devices, flexMixin, secondaryColor } from "./GlobalStyles";

export const ImgContainer = styled.article`
  max-width: 90vw;
  margin: 0 auto;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(386px, 1fr));
  grid-auto-rows: 300px;
  gap: 15px;

  @media ${devices.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  > div {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
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
  ${flexMixin({ justify: "center", align: "center" })};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;

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
