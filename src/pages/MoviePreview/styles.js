import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-areas:
    "header"
    "content";
  grid-template-rows: 11.6rem auto;

  > main {
    padding: 4rem 12.3rem;
    overflow-y: auto;
    grid-area: content;
    a {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_RED};
      margin-bottom: 2.4rem;
    }

    .title {
      display: flex;
      align-items: center;
      gap: 1.8rem;

      div svg {
        font-size: 20px;
        margin-right: 1rem;
      }

      margin-bottom: 2.4rem;
    }

    .title-stats {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      span:nth-child(1) {
        display: flex;
        align-items: center;
        gap: 8px;

        img {
          width: 1.6rem;
          height: 1.6rem;
        }
      }

      span:nth-child(2) {
        display: flex;
        align-items: center;
        gap: 8px;

        svg {
          font-size: 20px;
          color: ${({ theme }) => theme.COLORS.BACKGROUND_RED};
        }
      }
    }

    p {
      text-align: justify;
    }
  }
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  margin: 4rem 0;
  flex-wrap: wrap;
`;
