import { HeaderPage } from "../../components/Header";
import { ContactPage, ContactCard, ContactTitle, ContactIcon, ColStyled } from "./styles";
import { Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export function Contact() {
  return (
    <ContactPage>
      <HeaderPage />
      <Row xs={12} sm={12} md={12}>
        <Col xs={3} sm={3} md={3} />
        <ColStyled xs={6} sm={6} md={6}>
          <Row>
            <ContactCard>
              <a href="https://github.com/felipetoledo88" target="_blank" rel="noopener noreferrer">
                <ContactIcon>
                  <FaGithub />
                </ContactIcon>
                <ContactTitle>GitHub</ContactTitle>
              </a>
            </ContactCard>
          </Row>
          <Row>
            <ContactCard>
              <a href="https://www.linkedin.com/in/felipe-toledo-25502a1a1/" target="_blank" rel="noopener noreferrer">
                <ContactIcon>
                  <FaLinkedin />
                </ContactIcon>
                <ContactTitle>LinkedIn</ContactTitle>
              </a>
            </ContactCard>
          </Row>
          <Row>
            <ContactCard>
              <a href="mailto:felipetoledo88@gmail.com">
                <ContactIcon>
                  <FaEnvelope />
                </ContactIcon>
                <ContactTitle>Email</ContactTitle>
              </a>
            </ContactCard>
          </Row>
          <Row>
            <ContactCard>
              <a href="https://wa.me/5541996749435" target="_blank" rel="noopener noreferrer">
                <ContactIcon>
                  <FaWhatsapp />
                </ContactIcon>
                <ContactTitle>WhatsApp</ContactTitle>
              </a>
            </ContactCard>
          </Row>
        </ColStyled>
        <Col xs={3} sm={3} md={3} />
      </Row>
    </ContactPage>
  );
}
