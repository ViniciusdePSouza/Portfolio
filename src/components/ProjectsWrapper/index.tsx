import { Container, FormatDiv, InfoWrapper, LinkButton, ProjectCard } from "./styles";

import roleThumb from "../../assets/thumbs/role.png";
import gymThumb from "../../assets/thumbs/gym.png";
import dsThumb from "../../assets/thumbs/design.png";
import aluchefs from '../../assets/aluchef.png'

import { useTranslation } from "../../hooks/translationContext";

export function ProjectsWrapper() {
  const { language } = useTranslation();

  const projects = [
    {
      id: 1,
      titlePtbr: "Design System",
      titleEn: "Design System",
      techs: "React, StoryBook",
      link: "https://viniciusdepsouza.github.io/iToddy-Ui/?path=/story/home--page",
      repo: "https://github.com/ViniciusdePSouza/iToddy-Ui",
      thumb: dsThumb,
    },
    {
      id: 2,
      titlePtbr: "Plataforma de Eventos",
      titleEn: "Event Platform",
      techs: "React, Styled Components, Json server",
      link: "https://viniciusdepsouza.github.io/iToddy_Role/",
      repo: "https://github.com/ViniciusdePSouza/iToddy_Role",
      thumb: roleThumb,
    },
    {
      id: 3,
      titlePtbr: "Aplicativo de Academia",
      titleEn: "Gym App",
      techs: "React Native, NodeJS",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7062799332185448448/",
      repo: "https://github.com/ViniciusdePSouza/iToddy_Gym",
      thumb: gymThumb,
    },
    {
      id: 4,
      titlePtbr: "Aluchefs",
      titleEn: "Aluchefs",
      techs: "React, Strapi",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7101920728089788416/",
      repo: "https://github.com/ViniciusdePSouza/Aluchefs",
      thumb: aluchefs,
    },
  ];

  return (
    <Container>
      {projects.map((project) => (
        <ProjectCard key={project.id}>
          <img src={project.thumb} alt="" />
          <FormatDiv>
            <InfoWrapper>
              <h2>{language === "pt-br" ? project.titlePtbr : project.titleEn }</h2>
              <span>{project.techs}</span>a
            </InfoWrapper>

            <LinkButton href={project.link} target="_blank">Ver Link</LinkButton>
          </FormatDiv>
        </ProjectCard>
      ))}
    </Container>
  );
}
