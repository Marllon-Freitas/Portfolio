import React, { useRef, useEffect, useCallback } from 'react'
import { Icon, Label, ShortcutContainer } from './styled'

interface DesktopShortcutProps {
  position: { x: number; y: number }
  icon: string
  label: string
  onDoubleClick: () => void
  selected: boolean
  onClick: (e: React.MouseEvent) => void
  onDrag: (position: { x: number; y: number }) => void
  onStartDrag?: () => void
}

const DesktopShortcut: React.FC<DesktopShortcutProps> = ({
  position,
  icon,
  label,
  onDoubleClick,
  selected,
  onClick,
  onDrag,
  onStartDrag
}) => {
  const dragging = useRef(false)
  const offset = useRef({ x: 0, y: 0 })
  const containerRef = useRef(null)

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    dragging.current = true
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    }
    onClick(e)
    onStartDrag?.()
  }

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (dragging.current) {
        const newPosition = {
          x: e.clientX - offset.current.x,
          y: e.clientY - offset.current.y
        }
        onDrag(newPosition)
      }
    },
    [onDrag]
  )

  const handleMouseUp = useCallback(() => {
    dragging.current = false
  }, [])

  useEffect(() => {
    if (dragging.current) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    } else {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleMouseMove, handleMouseUp])

  return (
    <ShortcutContainer
      ref={containerRef}
      style={{ left: position.x, top: position.y }}
      onMouseDown={handleMouseDown}
      onDoubleClick={onDoubleClick}
      selected={selected}
    >
      <Icon src={icon} alt={label} draggable="false" />
      <Label>{label}</Label>
    </ShortcutContainer>
  )
}

export default DesktopShortcut
