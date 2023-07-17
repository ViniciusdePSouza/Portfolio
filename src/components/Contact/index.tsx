import {
  Avatar,
  ContactMeDiv,
  Container,
  IconsDiv,
  MailTo,
  SocialNetWorkDiv,
  SocialNetworkLink,
  TalkToMeDiv,
  WppButton,
  WppIcon,
} from "./styles";

import profilePicture from "../../assets/photos/linkedin.jpg";
import wppIcon from "../../assets/icons/whatsapp.png";
import instaIcon from "../../assets/icons/instagram.png";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import gitIcon from "../../assets/icons/github.png";

import { useTranslation } from "../../hooks/translationContext";

export function Contact() {
  const { language } = useTranslation();

  return (
    <Container>
      <Avatar>
        <img src={profilePicture} alt="" />
        <WppButton
          href="https://web.whatsapp.com/send?phone=5531994750572"
          target="_blanck"
        >
          <WppIcon src={wppIcon} alt="" />
          {language === "pt-br" ? (
            <span>Me chame no wpp</span>
          ) : (
            <span>Text me on whatsapp</span>
          )}
        </WppButton>
      </Avatar>

      <ContactMeDiv>
        {language === "pt-br" ? (
          <TalkToMeDiv>
            <h2>Me manda um alô 👋 lá nas redes sociais</h2>
            <p>
              Seja você uma equipe de design que precisa de suporte ou 
              uma empresa <br /> em estágio inicial procurando melhorar seu site,
              adoraria conversar sobre seu projeto.
            </p>
          </TalkToMeDiv>
        ) : (
          <TalkToMeDiv>
            <h2>Drop me a wave 👋 on social media!</h2>
            <p>
              Whether you're a design team in need of support or  an
              early-stage company <br /> looking to enhance your website, I'd love to
              chat about your project.
            </p>
          </TalkToMeDiv>
        )}
        <SocialNetWorkDiv>
          <IconsDiv>
            <SocialNetworkLink
              href="https://www.linkedin.com/in/viniciuspsouza01/"
              target="_blank"
            >
              <img src={linkedinIcon} alt="linkedin link" />
            </SocialNetworkLink>
            <SocialNetworkLink
              href="https://www.instagram.com/vinisouza.mp3/"
              target="_blank"
            >
              <img src={instaIcon} alt="instagram link" />
            </SocialNetworkLink>
            <SocialNetworkLink
              href="https://twitter.com/vinisouza_mp3"
              target="_blank"
            >
              <img src={twitterIcon} alt="twitter link" />
            </SocialNetworkLink>
            <SocialNetworkLink
              href="https://github.com/ViniciusdePSouza"
              target="_blank"
            >
              <img src={gitIcon} alt="github link" />
            </SocialNetworkLink>
          </IconsDiv>
          <MailTo href="mailto:dev.souzavinicius@gmail.com" target="_blank">
          {language === "pt-br" ? (
            <span>Vamos fazer mágica juntos (e-mail)</span>
          ) : (
            <span>Let's make magic together (e-mail)</span>
          )}
           
          </MailTo>
        </SocialNetWorkDiv>
      </ContactMeDiv>
    </Container>
  );
}
