import { Container, Row, Col } from "react-bootstrap";
import { HeaderPage } from "../Header";
import { AboutMePage, Content, Text, Image } from "./styles";

export function AboutMe() {
  return (
    <AboutMePage>
      <HeaderPage />
      <Container>
        <Row md={12}>
          <Col md={6} className="text-center">
            <Image src="https://kinsta.com/pt/wp-content/uploads/sites/3/2020/04/ferramentas-de-revisao-de-codigo.png" alt="Foto de perfil" roundedCircle />
          </Col>
          <Col  md={6}>
            <Content>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed justo non ex consequat feugiat. Cras non mi sit amet lectus consequat rutrum in nec ipsum. Suspendisse potenti. Sed vestibulum lectus in semper ullamcorper. Sed sed est in sapien varius malesuada. Aliquam erat volutpat. Integer eu elit fringilla, auctor dolor a, volutpat enim. Fusce consequat tellus id tristique vulputate. Suspendisse aliquam justo ut metus varius, in elementum tortor mollis. Nulla ac eros rutrum, posuere est eu, luctus dui.
              </Text>
            </Content>
          </Col>
        </Row>
      </Container>
    </AboutMePage>
  );
}