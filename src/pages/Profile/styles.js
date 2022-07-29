import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  header {
    width: 100%;
    height: 14.4rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_RED50};
    padding: 0 14.4rem;
    display: flex;
    align-items: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_RED};
    }
  }
`;

export const Form = styled.form`
  width: 34rem;
  margin: -10rem auto;

  div:nth-child(3) {
    margin-bottom: 1.5rem;
  }

  button {
    margin-top: 2.4rem;
  }

  > label {
    display: block;
    width: fit-content;
    margin-bottom: 5px;
    padding-left: 0.5rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_RED};
  }
`;

export const Avatar = styled.div`
  width: 18.6rem;
  height: 18.6rem;
  border-radius: 50%;
  position: relative;
  margin: 0 auto 6rem;

  img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  label {
    width: 4.8rem;
    height: 4.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_RED};
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    bottom: 15px;
    right: 0;

    svg {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }

    input {
      display: none;
    }
  }
`;
