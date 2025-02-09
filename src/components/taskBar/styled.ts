import styled from 'styled-components'

export const TaskbarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background-color: var(--gray);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
  border-top: 1px solid #333;
`

export const WindowsButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0 8px;
  height: 80%;
  gap: 1rem;
  justify-content: space-between;
  border: none;
  cursor: pointer;
  box-shadow:
    inset -1px -1px #0a0a0a,
    inset 1px 1px #fff,
    inset -2px -2px grey,
    inset 2px 2px #dfdfdf;
`

export const OpenApps = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 8px;
  gap: 4px;
  height: 100%;
`

export const OpenProgram = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  padding: 0 8px;
  height: 80%;
  gap: 4px;
  color: var(--black);
  cursor: pointer;
  box-shadow:
    inset -1px -1px #0a0a0a,
    inset 1px 1px #fff,
    inset -2px -2px grey,
    inset 2px 2px #dfdfdf;
  img {
    width: 1.25rem;
    height: 1.25rem;
  }
  p {
    margin: 0;
  }
`

export const Clock = styled.div`
  font-size: 0.8rem;
  color: var(--black);
`
