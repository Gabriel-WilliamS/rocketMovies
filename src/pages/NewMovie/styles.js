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
    grid-area: content;
    overflow-y: auto;
  }
`;

export const Form = styled.div`
  grid-area: content;
  padding: 4rem 12.3rem;
  height: 100vh;
  a {
    display: flex;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_RED};
    gap: 8px;
    align-items: center;
  }

  h1 {
    margin-top: 2.4rem;
  }
  .col-2 {
    display: flex;
    gap: 2rem;
    margin-block: 2rem;
  }

  span {
    display: block;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: 20px;
    margin: 4rem 0 2rem;
  }

  .tags {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 8px;
    display: flex;
    justify-content: flex-start;
    padding: 1.6rem;
    flex-wrap: wrap;
    gap: 2.4rem;
  }

  > button {
    margin-top: 4rem;
  }
`;
