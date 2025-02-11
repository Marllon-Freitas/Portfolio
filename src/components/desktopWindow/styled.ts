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
    background-image: url('/src/assets/icons/button_up.svg');
  }
  &::-webkit-scrollbar-button:vertical:end {
    height: 17px;
    background-image: url('/src/assets/icons/button_down.svg');
  }
  &::-webkit-scrollbar-button:horizontal:start {
    width: 16px;
    background-image: svg-load('/src/assets/icons/button_left.svg');
  }
  &::-webkit-scrollbar-button:horizontal:end {
    width: 16px;
    background-image: svg-load('/src/assets/icons/button_right.svg');
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
