import styled from 'styled-components'

interface ShortcutContainerProps {
  selected?: boolean
}

export const ShortcutContainer = styled.div<ShortcutContainerProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 5rem;
  cursor: grab;
  user-select: none;
  border: ${(props: ShortcutContainerProps) =>
    props.selected
      ? '1px solid var(--selection-border)'
      : '1px solid transparent'};
  background-color: ${(props: ShortcutContainerProps) =>
    props.selected ? 'var(--selection-background)' : 'transparent'};
  padding: 0.3rem 0.8rem;

  &:active {
    cursor: grabbing;
  }

  &:hover {
    border: 1px solid var(--selection-border);
    background-color: var(--selection-background);
  }
`

export const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  display: block;
  margin: 0 auto;
`

export const Label = styled.span`
  text-align: center;
  font-size: 0.6rem;
  margin-top: 5px;
`
