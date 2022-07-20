import styled from "styled-components";
export const Container = styled.header`
  width: 100%;
  height: 11.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6.4rem;
  grid-area: header;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  padding: 0 12.3rem;
  h2 {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_RED};
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  div {
    display: flex;
    flex-direction: column;
    text-align: right;

    p {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      white-space: nowrap;
    }

    a {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  img {
    width: 64px;
    height: 64px;
  }
`;
