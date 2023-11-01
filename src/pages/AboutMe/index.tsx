import { Container, Row, Col } from "react-bootstrap";
import { HeaderPage } from "../../components/Header";
import { AboutMePage, Text, Image, TechnologyImage, TechnologiesTitle, DescriptionStyled, TitleDev, SubtitleDev } from "./styles";

export function AboutMe() {
  return (
    <AboutMePage>
      <HeaderPage />
      <Container>
        <Row md={12}>
          <Col md={6} className="text-center">
            <Image  className="" src="/perfil.png" alt="Foto de perfil" roundedCircle />
            <TitleDev className="justify-content-center text-center">Felipe Toledo</TitleDev>
            <SubtitleDev className="justify-content-center text-center">Full Stack Developer</SubtitleDev>
          </Col>
          <Col  md={6}>
              <DescriptionStyled>
              Desenvolvedor FullStack com experiências em Arquiteturas de Software, Desenvolvimento Web, Mobile, Cloud e Liderança Técnica. A paixão pelo que faço se traduz na busca constante por novas tendências e inovações que possam aprimorar nossas soluções. Estou sempre focado em otimizar processos para elevar a qualidade do desenvolvimento de software e simplificar a vida das pessoas. Meu objetivo é transformar desafios em soluções acessíveis por meio da tecnologia.

              </DescriptionStyled>
            <Row className="justify-content-center">
          <TechnologiesTitle className="justify-content-center text-center">Principais Tecnologias</TechnologiesTitle>
                <Col xs={6} sm={4} md={2} className="text-center">
                  <TechnologyImage src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                </Col>
                <Col xs={6} sm={4} md={2} className="text-center">
                  <TechnologyImage src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJS" />
                </Col>
                <Col xs={6} sm={4} md={2} className="text-center">
                  <TechnologyImage src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="Typescript" />
                </Col>
                <Col xs={6} sm={4} md={2} className="text-center">
                  <TechnologyImage src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg" alt="AdonisJS" />
                </Col>
                <Col xs={6} sm={4} md={2} className="text-center">
                  <TechnologyImage src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" />
                </Col>
                <Col xs={6} sm={4} md={2} className="text-center">
                  <TechnologyImage src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg" alt="PostegreSql" />
                </Col>
              </Row>
          </Col>
        </Row>
      </Container>
    </AboutMePage>
  );
}