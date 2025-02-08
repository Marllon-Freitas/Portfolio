import styled, { keyframes } from 'styled-components'

export const flicker = keyframes`
  0% { opacity: 0.57861; }
  5% { opacity: 0.64769; }
  10% { opacity: 0.73604; }
  15% { opacity: 0.90626; }
  20% { opacity: 0.68128; }
  25% { opacity: 0.83891; }
  30% { opacity: 0.65583; }
  35% { opacity: 0.67807; }
  40% { opacity: 0.66559; }
  45% { opacity: 0.84693; }
  50% { opacity: 0.96019; }
  55% { opacity: 0.58594; }
  60% { opacity: 0.60313; }
  65% { opacity: 0.71988; }
  70% { opacity: 0.53455; }
  75% { opacity: 0.67288; }
  80% { opacity: 0.71428; }
  85% { opacity: 0.70419; }
  90% { opacity: 0.7003; }
  95% { opacity: 0.66108; }
  100% { opacity: 0.54387; }
`

export const textShadowAnimation = keyframes`
  0% {
    text-shadow: 0.44px 0 1px rgba(0,30,255,0.5),
                 -0.44px 0 1px rgba(255,0,80,0.3),
                 0 0 3px;
  }
  100% {
    text-shadow: 2.62px 0 1px rgba(0,30,255,0.5),
                 -2.62px 0 1px rgba(255,0,80,0.3),
                 0 0 3px;
  }
`

export const scanlineAnimation = keyframes`
  0% { bottom: 100%; }
  80% { bottom: 100%; }
  100% { bottom: -20%; }
`

export const MonitorScreen = styled.div`
  background: var(--black);
  border: 2px solid var(--white);
  width: 800px;
  height: 600px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
`

export const SelectionBox = styled.div`
  position: absolute;
  border: 1px dashed var(--selection-border);
  background: var(--selection-background);
  pointer-events: none;
  z-index: 10;
`

export const Content = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  padding: 20px;
  color: var(--white);
  background-color: var(--screen-background-color);
  image-rendering: pixelated;
  filter: contrast(1.5) brightness(0.9);

  animation: ${textShadowAnimation} 1s infinite alternate;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        rgba(18, 16, 16, 0) 50%,
        rgba(0, 0, 0, 0.25) 50%
      ),
      linear-gradient(
        90deg,
        rgba(255, 0, 0, 0.06),
        rgba(0, 255, 0, 0.02),
        rgba(0, 0, 255, 0.06)
      );
    background-size:
      100% 2px,
      3px 100%;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(18, 16, 16, 0.1);
    pointer-events: none;
    animation: ${flicker} 0.15s infinite;
  }
`

export const Scanline = styled.div`
  width: 100%;
  height: 100px;
  z-index: 8;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(255, 255, 255, 0.2) 10%,
    rgba(0, 0, 0, 0.1) 100%
  );
  opacity: 0.1;
  position: absolute;
  bottom: 100%;
  pointer-events: none;
  animation: ${scanlineAnimation} 10s linear infinite;
`
