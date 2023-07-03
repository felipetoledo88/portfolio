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
                  () => new Promise<void>((resolve) => setTimeout(resolve, 1500)),
                  (element: any) => {
                    if (element) {
                      const text = element.textContent || '';
                      element.textContent = text.slice(0, -15);
                    }
                  },
                  'Felipe Toledo.',
                  () => new Promise<void>((resolve) => setTimeout(resolve, 1500)),
                  (element: any) => {
                    if (element) {
                      const text = element.textContent || '';
                      const deleteCount = text.length;
                      let index = 0;
                      const intervalId = setInterval(() => {
                        if (index < deleteCount) {
                          element.textContent = text.slice(0, -index - 1);
                          index++;
                        } else {
                          clearInterval(intervalId);
                        }
                      }, 50);
                    }
                  },
                  () => new Promise<void>((resolve) => setTimeout(resolve, 2000)),
                ]}
                wrapper="strong"
                repeat={Infinity}
              >
                <LargeText />
              </TypeAnimationStyled>
              <Description className="text-left">
                "Construo pontes entre conceitos e códigos, transformando ideias em realidade digital."
              </Description>
            </Row>
          </Content>
        </RowStyled>
      </Container>
    </HomePage>
  );
}