import { Container, FormatDiv, InfoWrapper, LinkButton, ProjectCard } from "./styles";

import roleThumb from "../../assets/thumbs/role.png";
import gymThumb from "../../assets/thumbs/gym.png";
import dsThumb from "../../assets/thumbs/design.png";

export function ProjectsWrapper() {
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
      techs: "React Native, Styled Components, NodeJS",
      link: "https://github.com/ViniciusdePSouza/iToddy_Gym",
      repo: "https://github.com/ViniciusdePSouza/iToddy_Gym",
      thumb: gymThumb,
    },
  ];

  return (
    <Container>
      {projects.map((project) => (
        <ProjectCard key={project.id}>
          <img src={project.thumb} alt="" />
          <FormatDiv>
            <InfoWrapper>
              <h2>{project.titlePtbr}</h2>
              <span>{project.techs}</span>a
            </InfoWrapper>

            <LinkButton href={project.link} target="_blank">Ver Link</LinkButton>
          </FormatDiv>
        </ProjectCard>
      ))}
    </Container>
  );
}
