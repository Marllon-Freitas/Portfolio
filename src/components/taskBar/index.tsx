import React, { useEffect, useState } from 'react'
import {
  TaskbarContainer,
  WindowsButton,
  OpenApps,
  Clock,
  OpenProgram
} from './styled'
import windowsIcon from '../../assets/icons/start-button.png'

interface TaskbarProps {
  openWindows: { id: number; title: string; icon: string }[]
  onWindowsButtonClick: () => void
  onTaskClick: (id: number) => void
}

const Taskbar: React.FC<TaskbarProps> = ({
  openWindows,
  onWindowsButtonClick,
  onTaskClick
}) => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <TaskbarContainer>
      <WindowsButton onClick={onWindowsButtonClick}>
        <img src={windowsIcon} alt="Windows" />
        <p>Start</p>
      </WindowsButton>
      <OpenApps>
        {openWindows.map((window) => (
          <OpenProgram key={window.id} onClick={() => onTaskClick(window.id)}>
            {window.icon && <img src={window.icon} alt={window.title} />}
            {window.title}
          </OpenProgram>
        ))}
      </OpenApps>

      <Clock>{time.toLocaleTimeString()}</Clock>
    </TaskbarContainer>
  )
}

export default Taskbar
