import { Container, Row, Col } from "react-bootstrap";
import { HeaderPage } from "../Header";
import { AboutMePage, Text, Image, TechnologyImage, TechnologiesTitle, DescriptionStyled } from "./styles";

export function AboutMe() {
  return (
    <AboutMePage>
      <HeaderPage />
      <Container>
        <Row md={12}>
          <Col md={6} className="text-center">
            <Image  className="" src="https://kinsta.com/pt/wp-content/uploads/sites/3/2020/04/ferramentas-de-revisao-de-codigo.png" alt="Foto de perfil" roundedCircle />
            <TechnologiesTitle className="justify-content-center text-center">Felipe Toledo - Dev Full Stack</TechnologiesTitle>
          </Col>
          <Col  md={6}>
              <DescriptionStyled>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed justo non ex consequat feugiat. Cras non mi sit amet lectus consequat rutrum in nec ipsum. Suspendisse potenti. Sed vestibulum lectus in semper ullamcorper. Sed sed est in sapien varius malesuada. Aliquam erat volutpat. Integer eu elit fringilla, auctor dolor a, volutpat enim. Fusce consequat tellus id tristique vulputate. Suspendisse aliquam justo ut metus varius, in elementum tortor mollis. Nulla ac eros rutrum, posuere est eu, luctus dui.
              </DescriptionStyled>
            <Row className="justify-content-center">
          <TechnologiesTitle className="justify-content-center text-center">Tecnologias Utilizadas</TechnologiesTitle>
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