import { Container } from "./styles";

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
    {id: 1, icon: jsIcon, description: "ícone JavaScript" },
    {id: 2, icon: tsIcon, description: "ícone Typescript" },
    {id: 3, icon: flutterIcon, description: "Ícone flutter" },
    {id: 4, icon: reactIcon, description: "Ícone react" },
    {id: 5, icon: nextIcon, description: "Ícone nextjs" },
    {id: 6, icon: angularIcon, description: "Ícone Angular" },
    {id: 7, icon: nodeIcon, description: "Ícone NodeJS" },
    {id: 8, icon: styledComponentsIcon, description: "Ícone styled components" },
    {id: 9, icon: sassIcon, description: "Ícone sass" },
    {id: 0, icon: strapiIcon, description: "Ícone strapi" },
  ];

  return (
    <Container>
      {techsArray.map((tech) => (
        <img src={tech.icon} alt={tech.description} key={tech.id} />
      ))}
    </Container>
  );
}
