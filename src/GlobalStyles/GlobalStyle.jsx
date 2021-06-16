import { createGlobalStyle } from "styled-components";

// global styles

export const GlobalStyle = createGlobalStyle`
    html, body {
  overflow-x: hidden;
    margin: 0;
    padding: 0;
    text-align:center;
    background: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryLight};
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
`;


