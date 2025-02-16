import React from 'react'
import folderIcon from '../../../../assets/icons/folder.ico'
import DesktopShortcut from '../..'
import { Shortcut } from '../../../../utils/types'

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
    url: 'https://itch.io/embed-upload/7104883?color=333333',
    position: { x: 20, y: 20 }
  }
]

interface GamesProps {
  handleDoubleClick: (shortcut: Shortcut) => void
}

const Games: React.FC<GamesProps> = ({ handleDoubleClick }) => {
  return (
    <div>
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
              )
            })
          }
          selected={false}
          onClick={() => {}}
          onDrag={() => {}}
        />
      ))}
    </div>
  )
}

export default Games
