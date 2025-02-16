import styled from 'styled-components'

export const GamesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
`

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const GameInfo = styled.div`
  padding: 1rem 1rem 0 1rem;
`

export const GameDescription = styled.p`
  margin: 0.5rem 0;
  color: #333;
`

export const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`

export const LinksContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 20px;
    height: 20px;
  }
`

export const GameFrame = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  padding-top: 1rem;
`
