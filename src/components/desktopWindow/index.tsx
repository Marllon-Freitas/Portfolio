import React, { useRef, useState, useEffect, useCallback } from 'react'
import {
  WindowContainer,
  TitleBar,
  ControlButtons,
  Button,
  ContentArea,
  TitleBarInfo
} from './styled'

interface GenericWindowProps {
  title: string
  children: React.ReactNode
  icon?: string
  prevPosition?: { x: number; y: number }
  onClick?: () => void
  style?: React.CSSProperties
}

const GenericWindow: React.FC<GenericWindowProps> = ({
  title,
  children,
  icon,
  prevPosition,
  onClick,
  style
}) => {
  const [size, setSize] = useState({ width: 400, height: 300 })
  const [position, setPosition] = useState(prevPosition || { x: 100, y: 100 })
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)

  const startPos = useRef({ x: 0, y: 0 })
  const startSize = useRef({ width: 400, height: 300 })

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    startPos.current = { x: e.clientX - position.x, y: e.clientY - position.y }
  }

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - startPos.current.x,
          y: e.clientY - startPos.current.y
        })
      } else if (isResizing) {
        const newWidth =
          startSize.current.width + (e.clientX - startPos.current.x)
        const newHeight =
          startSize.current.height + (e.clientY - startPos.current.y)
        setSize({ width: newWidth, height: newHeight })
      }
    },
    [isDragging, isResizing]
  )

  const handleMouseUp = () => {
    setIsDragging(false)
    setIsResizing(false)
  }

  const handleResizeMouseDown = (e: React.MouseEvent) => {
    setIsResizing(true)
    startPos.current = { x: e.clientX, y: e.clientY }
    startSize.current = { width: size.width, height: size.height }
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleMouseMove])

  return (
    <WindowContainer
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        ...style
      }}
      onMouseDown={onClick}
    >
      <TitleBar onMouseDown={handleMouseDown}>
        <TitleBarInfo>
          <img src={icon} alt="icon" />
          <span>{title}</span>
        </TitleBarInfo>
        <ControlButtons>
          <Button onClick={() => setSize({ ...size, height: 0 })}>-</Button>
          <Button onClick={() => setSize({ width: 800, height: 600 })}>
            []
          </Button>
          <Button onClick={() => console.log('Closed')}>X</Button>
        </ControlButtons>
      </TitleBar>
      <ContentArea>{children}</ContentArea>
      <div
        onMouseDown={handleResizeMouseDown}
        style={{
          cursor: 'nwse-resize',
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '10px',
          height: '10px'
        }}
      />
    </WindowContainer>
  )
}

export default GenericWindow
