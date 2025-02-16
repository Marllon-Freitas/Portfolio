export interface TerminalColors {
  [key: string]: {
    name: string
    value: string
  }
}

export interface FileSystem {
  [key: string]: {
    type: 'file' | 'directory'
    content?: string
    children?: FileSystem
  }
}

export interface Shortcut {
  id: number
  position: { x: number; y: number }
  icon: string
  label: string
  content: React.ReactNode
}
