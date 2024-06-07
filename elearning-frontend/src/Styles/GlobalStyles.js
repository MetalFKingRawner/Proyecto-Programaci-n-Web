// src/Styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f0f2f5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyles;
