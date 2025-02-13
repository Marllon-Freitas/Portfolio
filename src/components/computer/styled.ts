import styled from 'styled-components'

export const ComputerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`

export const ComputerCase = styled.div`
  width: calc(var(--screen-width) + 5rem);
  height: calc(var(--screen-height) + 5rem);
  background-color: var(--gray);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
