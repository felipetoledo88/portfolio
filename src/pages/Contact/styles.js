import { Col } from 'react-bootstrap';
import styled from 'styled-components';

export const ContactPage = styled.div`
  background: linear-gradient(to bottom, #0A192F 0%, #2B6370 100%, #49B6A6 100%);
  height: 100vh;
  width: 100%;
  position: fixed;

  @media (max-width: 767px) {
    height: auto;
    min-height: 100vh;
    padding-bottom: 40px;
  }
  a {
    text-decoration: none;
  }
`;

export const ContactCard = styled.div`
  background-color: #fff;
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 20px;
  text-align: center;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const ContactIcon = styled.div`
  font-size: 24px;
  color: #2B6370;
  margin-bottom: 10px;
`;

export const ContactTitle = styled.h3`
  font-size: 16px;
  color: #2B6370;
  margin-bottom: 0;
`;

export const ColStyled = styled(Col)`
margin-top: 30%;
`