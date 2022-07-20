import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "content";

  main {
    padding: 5rem 12.3rem 5rem;
    grid-area: content;
    overflow-y: auto;
    .title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 4rem;

      button {
        width: 20.7rem;
      }
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
