import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;
  border: none;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_RED};
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  :disabled {
    filter: brightness(0.3);
    color: white;
  }
`;
