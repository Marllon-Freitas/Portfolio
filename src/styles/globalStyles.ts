import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --black: #000;
    --gray: #c0c0c0;
    --window-border: #ccc;
    --background: #008080;
    --window-blue: #000080;
    --selection-border: #99c1f1;
    --selection-background: rgba(153, 193, 241, 0.3);
    --screen-background-color: #001f3f;
    --font: 'Pixelated MS Sans Serif', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: "Pixelated MS Sans Serif";
    src: url("/src/assets/fonts/ms_sans_serif.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  html {
    font-family: var(--font);
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  
  body {
    margin: 0;
    padding: 0;
    background-color: var(--background);
  }
`
