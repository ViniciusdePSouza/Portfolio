import { Card, Container } from "./styles";

import jsIcon from "../../assets/techs/js.png";
import tsIcon from "../../assets/techs/typescript.png";
import flutterIcon from "../../assets/techs/flutter.svg";
import reactIcon from "../../assets/techs/react.svg";
import nextIcon from "../../assets/techs/nextjs.svg";
import angularIcon from "../../assets/techs/angular.png";
import nodeIcon from "../../assets/techs/file-type-node.svg";
import styledComponentsIcon from "../../assets/techs/file-type-styled.svg";
import sassIcon from "../../assets/techs/file-type-sass.svg";
import strapiIcon from "../../assets/techs/strapi.svg";


export function TechIconsWrapper() {
  const techsArray = [
    {id: 1, icon: jsIcon, description: "JavaScript" },
    {id: 2, icon: tsIcon, description: "Typescript" },
    {id: 3, icon: flutterIcon, description: "Flutter" },
    {id: 4, icon: reactIcon, description: "React" },
    {id: 5, icon: nextIcon, description: "Nextjs" },
    {id: 6, icon: angularIcon, description: "Angular" },
    {id: 7, icon: nodeIcon, description: "NodeJS" },
    {id: 8, icon: styledComponentsIcon, description: "Styled Components" },
    {id: 9, icon: sassIcon, description: "Sass" },
    {id: 0, icon: strapiIcon, description: "Strapi" },
  ];

  return (
    <Container>
      {techsArray.map((tech) => (
        <Card>
          <img src={tech.icon} alt={tech.description} key={tech.id} />
          <span>{tech.description}</span>
        </Card>
      ))}
    </Container>
  );
}
