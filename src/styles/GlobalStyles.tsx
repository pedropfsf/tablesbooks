import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    transition: all 100ms;

    font-family: Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyles;