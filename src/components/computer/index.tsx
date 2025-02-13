import { ReactNode } from 'react'
import { ComputerCase, ComputerContainer } from './styled'

interface ComputerProps {
  children: ReactNode
}

export const Computer = ({ children }: ComputerProps) => {
  return (
    <ComputerContainer>
      <ComputerCase>{children}</ComputerCase>
    </ComputerContainer>
  )
}
