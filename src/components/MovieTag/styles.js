import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_700};

  color: ${({ theme }) => theme.COLORS.GRAY};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY}` : "none"};

  border-radius: 10px;
  padding-right: 16px;

  button {
    background: none;
    border: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_RED};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_RED};
  }

  input {
    padding-left: 16px;
    height: 100%;
    color: ${({ theme }) => theme.COLORS.GRAY};
    background: transparent;
    outline: none;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY};
    }
  }
`;
