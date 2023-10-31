import styled from "styled-components";

export const AgendaArticle = styled.article`
  max-width: 85vw;
  margin: 0 auto;

  h2 {
    text-align: center;
    font-weight: 500;
    margin: 5rem 0;

    span {
      text-decoration: underline;
    }
  }

  h3 {
    font-weight: 500;
    text-decoration: underline;
    margin: 5rem 0 1rem;
  }

  ul {
    list-style-type: none;

    li {
      margin: 0.5rem 0;

      span {
        font-weight: 600;
      }
    }
  }
`;
