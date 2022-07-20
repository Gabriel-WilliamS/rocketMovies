import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%; 
  }

  body{ 
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    
    
  }
  
  body, input, button, textarea,a{
    font-family: ${({ theme }) => theme.FONTS.ROBOTOSLAB};
    font-size: 1.6rem;
  }

  a{
    text-decoration: none;

  }

  button, a{
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover{
    filter: brightness(0.9);
  }

  body *::-webkit-scrollbar {
  width: 7px;              
  } 

  body *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900}; 
  }

  body *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_RED};  
    border-radius: 20px;  
  }

`;
