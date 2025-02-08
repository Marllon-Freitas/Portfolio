import React, { useRef, useState, useEffect, useCallback } from 'react'
import {
  WindowContainer,
  TitleBar,
  ControlButtons,
  Button,
  ContentArea
} from './styled'

interface GenericWindowProps {
  title: string
  children: React.ReactNode
  prevPosition?: { x: number; y: number }
}

const GenericWindow: React.FC<GenericWindowProps> = ({ title, children, prevPosition}) => {
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
        height: size.height
      }}
    >
      <TitleBar onMouseDown={handleMouseDown}>
        <span>{title}</span>
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
