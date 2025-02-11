import React from 'react'
import { Wallpaper } from '../../../../types'
import {
  WallpaperOptionsContainer,
  WallpaperItem,
  WallpaperImage,
  WallpaperName
} from './styled'

interface WallpaperOptionsProps {
  wallpapers: Wallpaper[]
  currentWallpaperId: string
  onSelectWallpaper: (id: string) => void
}

const WallpaperOptions: React.FC<WallpaperOptionsProps> = ({
  wallpapers,
  currentWallpaperId,
  onSelectWallpaper
}) => {
  return (
    <WallpaperOptionsContainer>
      {wallpapers.map((wallpaper) => (
        <WallpaperItem
          key={wallpaper.id}
          onClick={() => onSelectWallpaper(wallpaper.id)}
          selected={currentWallpaperId === wallpaper.id}
        >
          <WallpaperImage image={wallpaper.src} />
          <WallpaperName>{wallpaper.name}</WallpaperName>
        </WallpaperItem>
      ))}
    </WallpaperOptionsContainer>
  )
}

export default WallpaperOptions
