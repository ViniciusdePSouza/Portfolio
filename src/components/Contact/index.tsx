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

export function Contact() {
  return (
    <Container>
      <Avatar>
        <img src={profilePicture} alt="" />
        <WppButton
          href="https://web.whatsapp.com/send?phone=5531994750572"
          target="_blanck"
        >
          <WppIcon src={wppIcon} alt="" />
          Me chame no wpp
        </WppButton>
      </Avatar>

      <ContactMeDiv>
        <TalkToMeDiv>
          <h2>Me manda um alô 👋 lá nas redes sociais</h2>
          <p>
            Seja você uma equipe de design que precisa de suporte ou <br /> uma
            empresa em estágio inicial procurando melhorar seu site, adoraria
            conversar sobre seu projeto.
          </p>
        </TalkToMeDiv>
        <SocialNetWorkDiv>
          <IconsDiv>
            <SocialNetworkLink href="https://www.linkedin.com/in/viniciuspsouza01/" target="_blank">
              <img src={linkedinIcon} alt="linkedin link" />
            </SocialNetworkLink>
            <SocialNetworkLink href="https://www.instagram.com/vinisouza.mp3/" target="_blank">
              <img src={instaIcon} alt="instagram link" />
            </SocialNetworkLink>
            <SocialNetworkLink href="https://twitter.com/vinisouza_mp3" target="_blank">
              <img src={twitterIcon} alt="twitter link" />
            </SocialNetworkLink>
            <SocialNetworkLink  href="https://github.com/ViniciusdePSouza" target="_blank">
              <img src={gitIcon} alt="github link" />
            </SocialNetworkLink>

          </IconsDiv>
            <MailTo href="mailto:dev.souzavinicius@gmail.com" target="_blank">Vamos fazer mágica juntos (email) </MailTo>
        </SocialNetWorkDiv>
      </ContactMeDiv>
    </Container>
  );
}
