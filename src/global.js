import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-size: ${({ theme }) => theme.fontSize};
    font-weight: ${({ theme }) => theme.fontNormal};
    height: 100vh;
    text-rendering: optimizeLegibility;
  }

  a {
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
  }
`;
