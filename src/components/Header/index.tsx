import { Container, IconsWrapper, LanguageButton, Link, MailTo, Nav } from "./styles";

import instagramIcon from "../../assets/icons/instagram.png";
import gitHubIcon from "../../assets/icons/github.png";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import brazilFlag from '../../assets/flags/brazil.png'
import usFlag from '../../assets/flags/united-states.png'

import { useTranslation } from "../../hooks/translationContext";

export function Header() {
  const { language, translateWebSite } = useTranslation();

  function handleChangeLanguage(language: string) {
    if (language === 'pt-br') {
      translateWebSite('en'); 
    } else if (language ==='en') {
      translateWebSite('pt-br'); 
    }
  }

  return (
    <Container>
      <IconsWrapper>
        <Link href="https://www.instagram.com/vinisouza.mp3/" target="_blank">
          <img src={instagramIcon} alt="Instagram link" />
        </Link>
        <Link href="https://www.linkedin.com/in/viniciuspsouza01/" target="_blank">
          <img src={linkedinIcon} alt="Linkedin link" />
        </Link>
        <Link href="https://github.com/ViniciusdePSouza" target="_blank">
          <img src={gitHubIcon} alt="GitHub link" />
        </Link>

        <LanguageButton onClick={() => handleChangeLanguage(language)} >
            <img src={language === "pt-br" ? brazilFlag : usFlag} alt=""/>
        </LanguageButton>
      </IconsWrapper>

      <Nav>
        <MailTo href="mailto:dev.souzavinicius@gmail.com" target="_blank">dev.souzavinicius@gmail.com</MailTo>
      </Nav>
    </Container>
  );
}
