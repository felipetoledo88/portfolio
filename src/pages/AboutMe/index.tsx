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
            <Image  className="" src="https://media.licdn.com/dms/image/C4D03AQGSGa3JnYddyQ/profile-displayphoto-shrink_800_800/0/1647613998173?e=1694649600&v=beta&t=vTBjnKMsGnDtNVa0dyxT8UWZxW_KJFXy5Ay1VcEWLjQ" alt="Foto de perfil" roundedCircle />
            <TitleDev className="justify-content-center text-center">Felipe Toledo</TitleDev>
            <SubtitleDev className="justify-content-center text-center">Full Stack Developer</SubtitleDev>
          </Col>
          <Col  md={6}>
              <DescriptionStyled>
              Sou um Desenvolvedor Fullstack dedicado, com experiência em soluções web e mobile abrangentes. Habilidades em front-end e back-end me permitem criar aplicações completas e intuitivas para os usuários.

No front-end, transformo designs em interfaces interativas e responsivas, com atenção aos detalhes e melhores práticas de desenvolvimento.

No back-end, crio APIs robustas e escaláveis, gerencio bancos de dados e integro serviços externos, buscando otimização e eficiência.

Mantenho-me atualizado sobre as tendências tecnológicas. Meu objetivo é entregar resultados de alta qualidade, garantindo a satisfação dos clientes e o sucesso dos projetos.

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