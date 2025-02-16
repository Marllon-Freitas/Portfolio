import React, { useState, useRef, useEffect } from 'react'
import {
  Input,
  InputContainer,
  TerminalContainer,
  TerminalLine
} from './styled'
import {
  AVAILABLE_COMMANDS,
  fileSystem,
  TERMINAL_COLORS
} from '../../../../utils/constants'
import { FileSystem } from '../../../../utils/types'

const Terminal: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('C:\\marllon\\portfolio')
  const [inputHistory, setInputHistory] = useState<string[]>([
    'Welcome to the Terminal! Type "help" for available commands.'
  ])
  const [currentInput, setCurrentInput] = useState('')
  const [historyIndex, setHistoryIndex] = useState<number | null>(null)
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [showAutoComplete, setShowAutoComplete] = useState(false)
  const [textColor, setTextColor] = useState('white')
  const [backgroundColor, setBackgroundColor] = useState('black')
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [inputHistory])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showAutoComplete &&
        !terminalRef.current?.contains(event.target as Node)
      ) {
        setShowAutoComplete(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showAutoComplete])

  const getAutoCompleteOptions = (input: string) => {
    const currentDir = navigateToPath(fileSystem, currentPath)
    const options: string[] = []

    if (!input.includes(' ')) {
      options.push(
        ...AVAILABLE_COMMANDS.filter((cmd) =>
          cmd.startsWith(input.toLowerCase())
        )
      )
    }

    if (
      input.toLowerCase().startsWith('cd ') ||
      input.toLowerCase().startsWith('type ')
    ) {
      const partialPath = input.split(' ')[1] || ''
      if (
        currentDir &&
        currentDir.type === 'directory' &&
        currentDir.children
      ) {
        options.push(
          ...Object.keys(currentDir.children).filter((name) =>
            name.toLowerCase().startsWith(partialPath.toLowerCase())
          )
        )
      }
    }

    return options
  }

  const processCommand = (command: string) => {
    if (!command.trim()) return ''

    setCommandHistory((prev) => [...prev, command])

    const parts = command.trim().split(' ')
    const cmd = parts[0].toLowerCase()
    const args = parts.slice(1)

    let output = ''

    switch (cmd) {
      case 'dir': {
        output = 'Directory of ' + currentPath + '\n\n'
        const currentDir = navigateToPath(fileSystem, currentPath)
        if (
          currentDir &&
          currentDir.type === 'directory' &&
          currentDir.children
        ) {
          for (const [name, item] of Object.entries(currentDir.children)) {
            output += `${item.type === 'directory' ? '<DIR>' : '     '} ${name}\n`
          }
        }
        break
      }
      case 'cd':
        if (args.length === 0) {
          output = currentPath
        } else {
          const newPath = args[0]
          const resolvedPath = resolvePath(currentPath, newPath)
          const targetDir = navigateToPath(fileSystem, resolvedPath)
          if (targetDir && targetDir.type === 'directory') {
            setCurrentPath(resolvedPath)
            output = ''
          } else {
            output = `The system cannot find the path specified.`
          }
        }
        break
      case 'cls':
        setInputHistory([''])
        return
      case 'help':
        output = `
          Available commands:
            dir     - List directory contents
            cd      - Change directory or show current directory
            cls     - Clear screen
            help    - Show this help message
            type    - Display content of a text file
            echo    - Display a message
            exit    - Exit the terminal
            color   - Change text and background color

          Tips:
            - Use Tab for command/path autocompletion
            - Use Up/Down arrows to navigate command history
            - Press Ctrl+L to clear screen
            - Use ".." to navigate to parent directory`
        break
      case 'type':
        if (args.length === 0) {
          output = 'The syntax of the command is incorrect.'
        } else {
          const filePath = resolvePath(currentPath, args[0])
          const file = navigateToPath(fileSystem, filePath)
          if (file && file.type === 'file' && file.content) {
            output = file.content
          } else {
            output = 'File not found.'
          }
        }
        break
      case 'echo':
        output = args.join(' ')
        break
      case 'color':
        if (args.length === 0) {
          output = 'The syntax of the command is incorrect.'
        } else {
          const colorCode = args[0].toUpperCase() as string
          const firstChar = colorCode[0] as keyof typeof TERMINAL_COLORS
          const secondChar = colorCode[1] as keyof typeof TERMINAL_COLORS

          if (
            colorCode.length === 2 &&
            TERMINAL_COLORS[firstChar] &&
            TERMINAL_COLORS[secondChar]
          ) {
            setBackgroundColor(TERMINAL_COLORS[firstChar].value)
            setTextColor(TERMINAL_COLORS[secondChar].value)
            output = `Text color set to ${TERMINAL_COLORS[secondChar].name}, background color set to ${TERMINAL_COLORS[firstChar].name}`
          } else {
            output =
              'Invalid color code. Use a valid color code (e.g., 0A, 1B, etc.).'
          }
        }
        break
      case 'exit':
        output = 'Goodbye! Closing terminal...'
        setTimeout(() => {
          setInputHistory((prev) => [...prev, 'Terminal session ended.'])
          setCurrentInput('')
          inputRef.current?.blur()
        }, 1000)
        break
      default:
        output = `'${cmd}' is not recognized as an internal or external command.`
    }

    return output
  }

  const navigateToPath = (fs: FileSystem, path: string) => {
    const parts = path.replace('C:', '').split('\\').filter(Boolean)
    let current = fs['C:']

    for (const part of parts) {
      if (
        current.type === 'directory' &&
        current.children &&
        current.children[part]
      ) {
        current = current.children[part]
      } else {
        return null
      }
    }

    return current
  }

  const resolvePath = (currentPath: string, newPath: string) => {
    if (newPath.startsWith('C:')) {
      return newPath
    }
    const parts = newPath.split('\\')
    const resolvedPath = currentPath.split('\\')
    for (const part of parts) {
      if (part === '..') {
        resolvedPath.pop()
      } else if (part !== '.') {
        resolvedPath.push(part)
      }
    }
    return resolvedPath.join('\\')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.ctrlKey && e.key === 'l') {
      e.preventDefault()
      setInputHistory([''])
      return
    }

    if (e.key === 'Tab') {
      e.preventDefault()
      const options = getAutoCompleteOptions(currentInput)
      if (options.length === 1) {
        const parts = currentInput.split(' ')
        if (parts.length > 1) {
          setCurrentInput(`${parts[0]} ${options[0]}`)
        } else {
          setCurrentInput(options[0])
        }
      } else if (options.length > 1) {
        setShowAutoComplete(true)
      }
      return
    }

    if (e.key === 'Enter') {
      setShowAutoComplete(false)
      const output = processCommand(currentInput)
      console.log('output', output)
      setInputHistory((prev) => [
        ...prev,
        `${currentPath}> ${currentInput}`,
        ...(output ? output.split('\n') : [])
      ])
      setCurrentInput('')
      setHistoryIndex(null)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === null
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setCurrentInput(commandHistory[newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex !== null) {
        if (historyIndex < commandHistory.length - 1) {
          setHistoryIndex(historyIndex + 1)
          setCurrentInput(commandHistory[historyIndex + 1])
        } else {
          setHistoryIndex(null)
          setCurrentInput('')
        }
      }
    } else if (e.key === 'Escape') {
      setShowAutoComplete(false)
    }
  }

  return (
    <TerminalContainer
      ref={terminalRef}
      onClick={() => inputRef.current?.focus()}
      style={{ color: textColor, backgroundColor: backgroundColor }}
    >
      {inputHistory.map((line, i) => (
        <TerminalLine key={i}>{line}</TerminalLine>
      ))}
      <InputContainer>
        <span>{`${currentPath}>`}</span>
        <Input
          ref={inputRef}
          type="text"
          value={currentInput}
          onChange={(e) => {
            setCurrentInput(e.target.value)
            const options = getAutoCompleteOptions(e.target.value)
            setShowAutoComplete(options.length > 0)
          }}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </InputContainer>
    </TerminalContainer>
  )
}

export default Terminal
