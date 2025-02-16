import { FileSystem, TerminalColors } from './types'

export const WINDOW_WIDTH: number = 1000
export const WINDOW_HEIGHT: number = 740

export const fileSystem: FileSystem = {
  'C:': {
    type: 'directory',
    children: {
      marllon: {
        type: 'directory',
        children: {
          portfolio: {
            type: 'directory',
            children: {
              'README.txt': {
                type: 'file',
                content: 'Welcome to my portfolio!'
              },
              projects: {
                type: 'directory',
                children: {}
              },
              about: {
                type: 'directory',
                children: {
                  'contact.txt': {
                    type: 'file',
                    content:
                      'Email: marllonfreitas64@gmail.com\nGitHub: marllon-freitas'
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

export const TERMINAL_COLORS: TerminalColors = {
  '0': { name: 'black', value: '#000000' },
  '1': { name: 'blue', value: '#000088' },
  '2': { name: 'green', value: '#008800' },
  '3': { name: 'aqua', value: '#008888' },
  '4': { name: 'red', value: '#880000' },
  '5': { name: 'purple', value: '#880088' },
  '6': { name: 'yellow', value: '#888800' },
  '7': { name: 'white', value: '#FFFFFF' },
  '8': { name: 'gray', value: '#888888' },
  '9': { name: 'lightblue', value: '#0000FF' },
  A: { name: 'lightgreen', value: '#00FF00' },
  B: { name: 'lightaqua', value: '#00FFFF' },
  C: { name: 'lightred', value: '#FF0000' },
  D: { name: 'lightpurple', value: '#FF00FF' },
  E: { name: 'lightyellow', value: '#FFFF00' }
}

export const AVAILABLE_COMMANDS = [
  'dir',
  'cd',
  'cls',
  'help',
  'type',
  'echo',
  'exit',
  'color'
]
