import styled from 'styled-components'

export const WallpaperOptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
`

interface WallpaperItemProps {
  selected: boolean
}

export const WallpaperItem = styled.div<WallpaperItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 5rem;
  cursor: pointer;
  user-select: none;
  border: ${(props: WallpaperItemProps) =>
    props.selected
      ? '1px solid var(--selection-border)'
      : '1px solid transparent'};
  background-color: ${(props: WallpaperItemProps) =>
    props.selected ? 'var(--selection-background)' : 'transparent'};
  padding: 0.3rem 0.8rem;

  &:hover {
    border: 1px solid var(--selection-border);
    background-color: var(--selection-background);
  }
`

interface WallpaperImageProps {
  image: string
}

export const WallpaperImage = styled.div<WallpaperImageProps>`
  width: 2.5rem;
  height: 2.5rem;
  display: block;
  margin: 0 auto;
  background-image: url(${(props: WallpaperImageProps) => props.image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`

export const WallpaperName = styled.span`
  text-align: center;
  font-size: 0.6rem;
  margin-top: 5px;
  color: var(--black);
`
