import { styled } from "styled-components";

export const SocialsContainer = styled.section`
  background-color: rgba(0, 0, 0, 0.9);
  margin: 5rem auto 2rem;
  width: fit-content;
  text-align: center;
  padding: 20px 20px 0;
  border-radius: 5px;

  > img {
    height: 150px;
    width: auto;
  }

  svg {
    font-size: 25px;
    color: #fff;
    margin: 1rem;
    cursor: pointer;
  }
`;
