import styled from 'styled-components'

export const WindowContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 300px;
  border: 0.2rem solid var(--window-border);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  user-select: none;
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
  opacity: 1;
`

export const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--window-blue);
  color: white;
  padding: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: move;
`

export const TitleBarInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 20px;
    height: 20px;
  }
`

export const ControlButtons = styled.div`
  display: flex;
  gap: 5px;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--gray);
  border: none;
  color: var(--black);
  cursor: pointer;
  font-size: 1.2rem;
  width: 1.5rem;
  box-shadow: var(--windows-button-box-shadow);

  &:hover {
    opacity: 0.8;
  }
`

export const ContentArea = styled.div`
  user-select: text;
  background-color: rgb(177, 177, 177);
  padding: 0.625rem;
  height: calc(100% - 1.7rem);
  overflow: auto;
  color: var(--white);
  font-size: 0.8rem;

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
`

export const ResizeHandle = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 16px;
  height: 16px;
  cursor: nwse-resize;
  &::after {
    content: '';
    position: absolute;
    right: 3px;
    bottom: 3px;
    width: 8px;
    height: 8px;
    border-right: 2px solid #666;
    border-bottom: 2px solid #666;
  }
`
