import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 5.6rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 1rem;
  margin-bottom: 0.8rem;
  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-left: 1.6rem;
  }
  input {
    width: 100%;

    background: transparent;
    border: none;
    padding: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    &:focus {
      outline: none;
    }
  }
`;
