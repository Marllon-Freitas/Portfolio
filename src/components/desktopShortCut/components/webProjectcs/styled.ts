import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
`

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const ProjectInfo = styled.div`
  padding: 1rem 1rem 0 1rem;
`

export const ProjectDescription = styled.p`
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

export const ProjectFrame = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  padding-top: 1rem;
`
