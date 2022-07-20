import styled from "styled-components";
import teatro from "../../assets/theater.png";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Form = styled.form`
  width: 63.7rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  height: 100vh;
  padding: 0 13.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_RED};
    font-weight: 700;
    font-size: 48px;
  }

  strong {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 4.8rem;
  }

  h2 {
    margin-bottom: 4.8rem;
  }

  a {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_RED};
    text-align: center;
  }

  button {
    margin-top: 2.4rem;
    margin-bottom: 4.2rem;
  }
`;

export const BackgroundImg = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${teatro}) no-repeat center;
  background-size: cover;
  filter: brightness(0.3);
`;
