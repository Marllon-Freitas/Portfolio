import React from 'react'
import folderIcon from '../../../../assets/icons/folder.ico'
import DesktopShortcut from '../..'
import { Shortcut } from '../../../../utils/types'
import { GamesContainer } from './styled'

interface Game {
  id: number
  name: string
  url: string
  position: { x: number; y: number }
}

const games: Game[] = [
  {
    id: 1000,
    name: 'Asteroids',
    url: 'https://itch.io/embed-upload/7104883?color=b1b1b1',
    position: { x: 20, y: 20 }
  },
  {
    id: 1001,
    name: 'Tetris',
    url: 'https://itch.io/embed-upload/7095744?color=b1b1b1',
    position: { x: 60, y: 20 }
  },
  {
    id: 1002,
    name: 'Minesweeper',
    url: 'https://itch.io/embed-upload/7090368?color=b1b1b1',
    position: { x: 100, y: 20 }
  },
  {
    id: 1003,
    name: 'Pong',
    url: 'https://itch.io/embed-upload/7141235?color=b1b1b1',
    position: { x: 140, y: 20 }
  }
]

interface GamesProps {
  handleDoubleClick: (shortcut: Shortcut) => void
}

const Games: React.FC<GamesProps> = ({ handleDoubleClick }) => {
  return (
    <GamesContainer>
      {games.map((game) => (
        <DesktopShortcut
          key={game.id}
          position={game.position}
          icon={folderIcon}
          label={game.name}
          onDoubleClick={() =>
            handleDoubleClick({
              id: game.id,
              position: game.position,
              icon: folderIcon,
              label: game.name,
              content: (
                <iframe
                  src={game.url}
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  title={game.name}
                />
              ),
              isInFolder: false
            })
          }
          selected={false}
          onClick={() => {}}
          onDrag={() => {}}
          isInFolder={true}
        />
      ))}
    </GamesContainer>
  )
}

export default Games
