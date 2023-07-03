import { HeaderPage } from '../Header';
import { Content, Description, HomePage, LargeText, RowStyled, SmallText, TypeAnimationStyled } from './styles';
import './../../reset.css';
import { Container, Row, Col } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';


export function Home() {
  return (
    <HomePage>
      <HeaderPage />
      <Container fluid>
        <RowStyled className="justify-content-center align-items-center" style={{ height: '100%' }}>
          <Content>
            <Row>
              <SmallText className="text-left">Olá, meu nome é...</SmallText>
              <TypeAnimationStyled
                sequence={[
                  () => new Promise<void>((resolve) => setTimeout(resolve, 2000)),
                  (element: any) => {
                    if (element) {
                      const text = element.textContent || '';
                      element.textContent = text.slice(0, -15);
                    }
                  },
                  'Felipe Toledo.',
                  () => new Promise<void>((resolve) => setTimeout(resolve, 2000)),
                ]}
                wrapper="strong"
              >
                <LargeText />
              </TypeAnimationStyled>
              <Description className="text-center">
                "Construo pontes entre conceitos e códigos, transformando ideias em realidade digital."
              </Description>
            </Row>
          </Content>
        </RowStyled>
      </Container>
    </HomePage>
  );
}