import React from 'react'
import folderIcon from '../../../../assets/icons/folder.ico'
import githubIcon from '../../../../assets/icons/github.svg'
import itchIoLogo from '../../../../assets/icons/itchio.svg'
import DesktopShortcut from '../..'
import { Shortcut } from '../../../../utils/types'
import {
  GameContainer,
  GameDescription,
  GameFrame,
  GameInfo,
  GamesContainer,
  LinksContainer,
  LinksContent
} from './styled'

interface Game {
  id: number
  name: string
  url: string
  position: { x: number; y: number }
  description: string
  repoUrl: string
  originalUrl: string
}

const games: Game[] = [
  {
    id: 1000,
    name: 'Asteroids',
    url: 'https://itch.io/embed-upload/7104883?color=b1b1b1',
    position: { x: 20, y: 20 },
    description: 'Simple project made to learn more about unity and c#.',
    repoUrl: 'https://github.com/yourusername/asteroids-game',
    originalUrl: 'https://marllon-freitas.itch.io/asteroids'
  },
  {
    id: 1001,
    name: 'Tetris',
    url: 'https://itch.io/embed-upload/7095744?color=b1b1b1',
    position: { x: 50, y: 50 },
    description: 'Simple project made to learn more about unity and c#.',
    repoUrl: 'https://github.com/Marllon-Freitas/Tetris',
    originalUrl: 'https://marllon-freitas.itch.io/tetris'
  },
  {
    id: 1002,
    name: 'Minesweeper',
    url: 'https://itch.io/embed-upload/7090368?color=b1b1b1',
    position: { x: 0, y: 0 },
    description: 'Simple project made to learn more about unity and c#.',
    repoUrl: 'https://github.com/Marllon-Freitas/Campo-Minado',
    originalUrl: 'https://marllon-freitas.itch.io/campo-minado'
  },
  {
    id: 1003,
    name: 'Pong',
    url: 'https://itch.io/embed-upload/7141235?color=b1b1b1',
    position: { x: 0, y: 0 },
    description: 'Simple project made to learn more about unity and c#.',
    repoUrl: 'https://github.com/Marllon-Freitas/Pong',
    originalUrl: 'https://marllon-freitas.itch.io/pong'
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
                <GameContainer>
                  <GameInfo>
                    <GameDescription>{game.description}</GameDescription>
                    <LinksContainer>
                      <LinksContent>
                        <img src={githubIcon} alt="GitHub Logo" />
                        <a
                          href={game.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View on GitHub
                        </a>
                      </LinksContent>
                      <LinksContent>
                        <img src={itchIoLogo} alt="itch.io Logo" />
                        <a
                          href={game.originalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Play Original Version
                        </a>
                      </LinksContent>
                    </LinksContainer>
                  </GameInfo>
                  <GameFrame>
                    <iframe
                      src={game.url}
                      style={{ width: '100%', height: '100%', border: 'none' }}
                      title={game.name}
                    />
                  </GameFrame>
                </GameContainer>
              ),
              isInFolder: true
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
