import { Container, IconsWrapper, LanguageButton, Link, MailTo, Nav } from "./styles";

import instagramIcon from "../../assets/icons/instagram.png";
import gitHubIcon from "../../assets/icons/github.png";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import brazilFlag from '../../assets/flags/brazil.png'

export function Header() {
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

        <LanguageButton>
            <img src={brazilFlag} alt="" />
        </LanguageButton>
      </IconsWrapper>

      <Nav>
        <MailTo href="mailto:dev.souzavinicius@gmail.com" target="_blank">dev.souzavinicius@gmail.com</MailTo>
      </Nav>
    </Container>
  );
}
