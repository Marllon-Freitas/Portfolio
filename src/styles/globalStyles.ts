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
  
  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar:horizontal {
    height: 17px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    box-shadow: var(--windows-button-box-shadow);
  }

  &::-webkit-scrollbar-thumb:horizontal {
    background-color: #fff;
    box-shadow:
      inset 1px 1px #0a0a0a,
      inset -1px -1px #fff,
      inset 2px 2px grey,
      inset -2px -2px #dfdfdf;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  &::-webkit-scrollbar-corner {
    background: #dfdfdf;
  }

  &::-webkit-scrollbar-button:horizontal:start:decrement,
  &::-webkit-scrollbar-button:horizontal:end:increment,
  &::-webkit-scrollbar-button:vertical:start:decrement,
  &::-webkit-scrollbar-button:vertical:end:increment {
    display: block;
  }

  &::-webkit-scrollbar-button:vertical:start {
    height: 17px;
    background-image: url("data:image/svg+xml,%3csvg%20width='16'%20height='17'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15%200H0v16h1V1h14V0z'%20fill='%23DFDFDF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M2%201H1v14h1V2h12V1H2z'%20fill='%23fff'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16%2017H0v-1h15V0h1v17z'%20fill='%23000'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15%201h-1v14H1v1h14V1z'%20fill='gray'/%3e%3cpath%20fill='silver'%20d='M2%202h12v13H2z'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8%206H7v1H6v1H5v1H4v1h7V9h-1V8H9V7H8V6z'%20fill='%23000'/%3e%3c/svg%3e");
  }
  &::-webkit-scrollbar-button:vertical:end {
    height: 17px;
    background-image: url("data:image/svg+xml,%3csvg%20width='16'%20height='17'%20viewBox='0%200%2016%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='16'%20height='17'%20fill='url(%23pattern0_3_8)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_3_8'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_3_8'%20transform='scale(0.0625%200.0588235)'/%3e%3c/pattern%3e%3cimage%20id='image0_3_8'%20width='16'%20height='17'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABTSURBVDhPY7h///5/cjEDA8N/sAHkgIaGBlQDDhw4QBIezgaABXFgogwAYXSNIIwsD8IEvYBPMwgTFQa4NIMw7QKRWDzcDABxyMFgA6AEmZjhPwBnshA2nlMLbwAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e");
  }
  &::-webkit-scrollbar-button:horizontal:start {
    width: 16px;
    background-image: url("data:image/svg+xml,%3csvg%20width='16'%20height='17'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15%200H0v16h1V1h14V0z'%20fill='%23DFDFDF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M2%201H1v14h1V2h12V1H2z'%20fill='%23fff'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16%2017H0v-1h15V0h1v17z'%20fill='%23000'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15%201h-1v14H1v1h14V1z'%20fill='gray'/%3e%3cpath%20fill='silver'%20d='M2%202h12v13H2z'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9%204H8v1H7v1H6v1H5v1h1v1h1v1h1v1h1V4z'%20fill='%23000'/%3e%3c/svg%3e");
  }
  &::-webkit-scrollbar-button:horizontal:end {
    width: 16px;
    background-image: url("data:image/svg+xml,%3csvg%20width='16'%20height='17'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15%200H0v16h1V1h14V0z'%20fill='%23DFDFDF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M2%201H1v14h1V2h12V1H2z'%20fill='%23fff'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16%2017H0v-1h15V0h1v17z'%20fill='%23000'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15%201h-1v14H1v1h14V1z'%20fill='gray'/%3e%3cpath%20fill='silver'%20d='M2%202h12v13H2z'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M7%204H6v7h1v-1h1V9h1V8h1V7H9V6H8V5H7V4z'%20fill='%23000'/%3e%3c/svg%3e");
  }

  p, h1, h2, h3, h4, h5, h6, span, a, li, div {
    animation: ${textShadowAnimation} 1s infinite alternate;
    -webkit-animation: ${textShadowAnimation} 1s infinite alternate;
    -moz-animation: ${textShadowAnimation} 1s infinite alternate;
    -o-animation: ${textShadowAnimation} 1s infinite alternate;
  }
`
