import styled from "styled-components";

export const Container = styled.span`
  height: 2.4rem;
  padding: 5px 16px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: ${({ theme }) => theme.COLORS.GRAY};
  font-size: 12px;
`;
