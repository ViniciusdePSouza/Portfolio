import { Contact } from "../../components/Contact";
import { Header } from "../../components/Header";
import { ProjectsWrapper } from "../../components/ProjectsWrapper";
import { TechIconsWrapper } from "../../components/TechIconsWrapper";

import {
  ProfileDiv,
  PunchLineSpan,
  SubPunchLineSpan,
  TitleDiv,
} from "./styles";

import profilePicture from "../../assets/photos/linkedin.jpg";

import { useTranslation } from "../../hooks/translationContext";

export function Home() {
  const { language } = useTranslation();

  return (
    <>
      <Header />

      <ProfileDiv>
        {language === "pt-br" ? (
          <h1>Oi, Sou o Vinícius!</h1>
        ) : (
          <h1>Hi! My name is Vinícius</h1>
        )}

        <img src={profilePicture} alt="Foto de perfil" />

        <TitleDiv>
          <div>
            </div>
            {language === "pt-br" ? (
              <p>
                Desenvolvedor <br />
                Front-end
              </p>
            ) : (
              <p>Front-end Developer</p>
            )}
        </TitleDiv>

        {language === "pt-br" ? (
          <PunchLineSpan>
            A cada novo desafio uma nova oportunidade
          </PunchLineSpan>
        ) : (
          <PunchLineSpan>
            In every new challenge, there is a new opportunity.
          </PunchLineSpan>
        )}

        {language === "pt-br" ? (
          <SubPunchLineSpan>
            Criando aplicações que causam impacto em você e na sua empresa
          </SubPunchLineSpan>
        ) : (
          <SubPunchLineSpan>
            Creating applications that have an impact on you and your company.
          </SubPunchLineSpan>
        )}

        <TechIconsWrapper />

        <ProjectsWrapper />

        {language === "pt-br" ? <h2>Contato</h2> : <h2>Contact</h2>}

        <Contact />
      </ProfileDiv>
    </>
  );
}
