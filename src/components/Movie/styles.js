import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 3.2rem;
  border-radius: 1.6rem;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.COLORS.GRAY};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_RED50};
  cursor: pointer;

  strong {
    font-size: 24px;
    margin-bottom: 0.8rem;
  }

  > div {
    margin-bottom: 1.5rem;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: justify;
    max-height: 3.6rem;
    line-height: 1.8rem;
  }
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  margin-top: 2.8rem;
  flex-wrap: wrap;
`;
