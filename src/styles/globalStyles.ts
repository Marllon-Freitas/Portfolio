import { createGlobalStyle, keyframes } from 'styled-components'
import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../utils'

export const textShadowAnimation = keyframes`
  0% {
    text-shadow: 0.2px 0 0.3px rgba(0,30,255,0.5),
                 -0.2px 0 0.3px rgba(255,0,80,0.3),
                 0 0 3px;
  }
  100% {
    text-shadow: 0.7px 0 1px rgba(0,30,255,0.5),
                 -0.7px 0 1px rgba(255,0,80,0.3),
                 0 0 3px;
  }
`

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
    --windows-button-box-shadow: 
      inset -1px -1px #0a0a0a,
      inset 1px 1px #fff,
      inset -2px -2px grey,
      inset 2px 2px #dfdfdf;

    --screen-width: ${WINDOW_WIDTH}px;
    --screen-height: ${WINDOW_HEIGHT}px;
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
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  
  body {
    font-family: var(--font);
    background-color: var(--background);
  }

  p, h1, h2, h3, h4, h5, h6, span, a, li, div {
    animation: ${textShadowAnimation} 1s infinite alternate;
    -webkit-animation: ${textShadowAnimation} 1s infinite alternate;
    -moz-animation: ${textShadowAnimation} 1s infinite alternate;
    -o-animation: ${textShadowAnimation} 1s infinite alternate;
  }
`
