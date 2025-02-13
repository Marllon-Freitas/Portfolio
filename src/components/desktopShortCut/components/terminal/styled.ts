import styled from 'styled-components'

export const TerminalContainer = styled.div`
  font-family: monospace;
  color: white;
  background-color: var(--black);
  height: 100%;
  width: 100%;
  overflow: auto;
`

export const TerminalLine = styled.div`
  width: 100%;
`

export const InputContainer = styled.div`
  display: flex;
`

export const Input = styled.input`
  flex: 1;
  background-color: transparent;
  outline: none;
  border: none;
  margin-left: 4px;
  color: inherit;
  font-family: inherit;
`
