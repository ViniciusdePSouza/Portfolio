import { Header } from "./components/Header";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";

import { ProfileDiv, PunchLineSpan, SubPunchLineSpan} from "./appstyles";

import profilePicture from "../src/assets/photos/linkedin.jpg";

import { TechIconsWrapper } from "./components/TechIconsWrapper";
import { ProjectsWrapper } from "./components/ProjectsWrapper";
import { Contact } from "./components/Contact";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />

      <ProfileDiv>
        <h1>Oi, Sou o Vinícius!</h1>

        <img src={profilePicture} alt="Foto de perfil" />

        <p>
          Desenvolvedor <br />
          Front-end
        </p>
        <PunchLineSpan>A cada novo desafio uma nova oportunidade</PunchLineSpan>

        <SubPunchLineSpan>
          Criando aplicações que causam impacto em você e na sua empresa
        </SubPunchLineSpan>

        <TechIconsWrapper />

        <ProjectsWrapper />

        <h2>Contato</h2>
        
        <Contact />
      </ProfileDiv>
    </ThemeProvider>
  );
}

export default App;
