import React, { useState, useEffect } from 'react'
import folderIcon from '../../../../assets/icons/folder.ico'
import githubIcon from '../../../../assets/icons/github.svg'
import webIcon from '../../../../assets/icons/msie.png'
import { Shortcut } from '../../../../utils/types'
import {
  ProjectContainer,
  ProjectDescription,
  ProjectFrame,
  ProjectInfo,
  ProjectsContainer,
  LinksContainer,
  LinksContent
} from './styled'
import DesktopShortcut from '../..'

interface WebProject {
  id: number
  name: string
  url: string
  position: { x: number; y: number }
  description: string
  repoUrl: string
}

const webProjects: WebProject[] = [
  {
    id: 2000,
    name: 'Portfolio',
    url: 'https://marllon-freitas.github.io/portfolio/',
    position: { x: 20, y: 20 },
    description: 'My personal portfolio website.',
    repoUrl: 'https://github.com/Marllon-Freitas/portfolio'
  },
  {
    id: 2001,
    name: 'Simple React Canvas',
    url: 'https://marllon-freitas.github.io/simple-react-canvas/',
    position: { x: 0, y: 0 },
    description: 'Project to learn more about react and canvas.',
    repoUrl: 'https://github.com/Marllon-Freitas/simple-react-canvas'
  },
  {
    id: 2002,
    name: 'Simple React Game',
    url: 'https://marllon-freitas.github.io/simple-procedural-animation/',
    position: { x: 0, y: 0 },
    description:
      'A simple version of the procedural animation project based on this video: https://www.youtube.com/watch?v=qlfh_rv6khY&ab_channel=argonaut . The project uses HTML, CSS, and JavaScript to create animations.',
    repoUrl: 'https://github.com/Marllon-Freitas/simple-procedural-animation'
  },
  {
    id: 2003,
    name: '2D Raycasting',
    url: 'https://marllon-freitas.github.io/2D-raycasting/',
    position: { x: 0, y: 0 },
    description: 'Project to learn more about raycasting.',
    repoUrl: 'https://github.com/Marllon-Freitas/2D-raycasting'
  }
]

const ProjectContent: React.FC<{ project: WebProject }> = ({ project }) => {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoad(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ProjectContainer>
      <ProjectInfo>
        <ProjectDescription>{project.description}</ProjectDescription>
        <LinksContainer>
          <LinksContent>
            <img src={githubIcon} alt="GitHub Logo" />
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </LinksContent>
          <LinksContent>
            <img src={webIcon} alt="Web Logo" />
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              View Demo
            </a>
          </LinksContent>
        </LinksContainer>
      </ProjectInfo>
      <ProjectFrame>
        {shouldLoad ? (
          <iframe
            src={project.url}
            style={{ width: '100%', height: '100%', border: 'none' }}
            title={project.name}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-100">
            Loading preview...
          </div>
        )}
      </ProjectFrame>
    </ProjectContainer>
  )
}

interface WebProjectsProps {
  handleDoubleClick: (shortcut: Shortcut) => void
}

const WebProjects: React.FC<WebProjectsProps> = ({ handleDoubleClick }) => {
  return (
    <ProjectsContainer>
      {webProjects.map((project) => (
        <DesktopShortcut
          key={project.id}
          position={project.position}
          icon={folderIcon}
          label={project.name}
          onDoubleClick={() =>
            handleDoubleClick({
              id: project.id,
              position: project.position,
              icon: folderIcon,
              label: project.name,
              content: <ProjectContent project={project} />,
              isInFolder: true
            })
          }
          selected={false}
          onClick={() => {}}
          onDrag={() => {}}
          isInFolder={true}
        />
      ))}
    </ProjectsContainer>
  )
}

export default WebProjects
