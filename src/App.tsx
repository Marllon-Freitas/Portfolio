import { GlobalStyle } from './styles/globalStyles'
import { Computer } from './components/computer'
import { Monitor } from './components/monitor'

function App() {
  return (
    <>
      <GlobalStyle />
      <Computer>
        <Monitor />
      </Computer>
    </>
  )
}

export default App
