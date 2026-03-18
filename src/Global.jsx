import { createGlobalStyle } from "styled-components";
import Planofundo from "./Planofundo/A1.png";

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  body {
    background: url(${Planofundo}) no-repeat center center;
    background-size: cover;
    background-attachment: fixed; 
  }

`;

export default GlobalStyle;