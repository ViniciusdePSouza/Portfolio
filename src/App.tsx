import { Header } from './components/Header'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from "./styles/global";

import { ProfileDiv } from './appstyles';

import profilePicture from '../src/assets/photos/linkedin.jpg'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header/>

      <ProfileDiv>
        <h2>
          Oi, Sou o Vinícius! 
        </h2>

        <img src={profilePicture} alt="Foto de perfil" />
      </ProfileDiv>
    </ThemeProvider>
  )
}

export default App
