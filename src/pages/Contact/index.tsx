import { HeaderPage } from "../../components/Header";
import { ContactPage, ContactContainer, ContactCard, ContactIcon, ContactText } from "./styles";
import { FaEnvelope, FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";

export function Contact() {
  return (
    <ContactPage>
      <HeaderPage />
      <ContactContainer>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} sm={6} md={3}>
            <ContactCard>
              <ContactIcon>
                <FaEnvelope size={48} />
              </ContactIcon>
              <ContactText>Email</ContactText>
            </ContactCard>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <ContactCard>
              <ContactIcon>
                <FaGithub size={48} />
              </ContactIcon>
              <ContactText>Github</ContactText>
            </ContactCard>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <ContactCard>
              <ContactIcon>
                <FaWhatsapp size={48} />
              </ContactIcon>
              <ContactText>WhatsApp</ContactText>
            </ContactCard>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <ContactCard>
              <ContactIcon>
                <FaLinkedin size={48} />
              </ContactIcon>
              <ContactText>LinkedIn</ContactText>
            </ContactCard>
          </Col>
        </Row>
      </ContactContainer>
    </ContactPage>
  );
}
