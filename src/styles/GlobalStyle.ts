import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin:0 ;
    padding: 0;
    box-sizing: border-box;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.50%;
    }
  }

  html,body,#root{
    height: 100vh;
    width: 100vw;
  }

  body{
    font: normal 1rem "Roboto", sans-serif;
    overflow: hidden;
  }
`;
