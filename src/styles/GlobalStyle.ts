import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: ${({ theme }) => theme.colours.main};
    font-family: ${({ theme }) => theme.typography.family};
  }

  
  h1,
  h2 {
    margin: 0;
  }
  `;

export default GlobalStyle;
