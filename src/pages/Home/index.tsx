import { HeaderPage } from '../Header';
import { Content, Description, HomePage, LargeText, RowStyled, SmallText } from './styles';
import './../../reset.css';
import { Container, Row, Col } from 'react-bootstrap';
import Typing from 'react-typing-animation';

export function Home() {
  return (
    <HomePage>
      <HeaderPage />
      <Container fluid>
        <RowStyled className="justify-content-center align-items-center" style={{ height: '100%' }}>
          <Content>
            <Row>
              <SmallText className="text-left">Olá, meu nome é...</SmallText>
              <Typing loop>
                <LargeText>
                  Felipe Toledo.
                  <Typing.Delay ms={2000} />
                  <Typing.Backspace count={15} delay={2000} />
                </LargeText>
              </Typing>
              <Description className="text-center">"Construo pontes entre conceitos e códigos, transformando ideias em realidade digital."</Description>
            </Row>
          </Content>
        </RowStyled>
      </Container>
    </HomePage>
  );
}



