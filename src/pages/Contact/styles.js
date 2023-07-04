import styled from 'styled-components';

export const ContactPage = styled.div`
  background: linear-gradient(to bottom, #0A192F 0%, #2B6370 100%, #49B6A6 100%);
  height: 100vh;
  width: 100%;

  @media (max-width: 767px) {
    height: auto;
    min-height: 100vh;
    padding-bottom: 40px;
  }
`;

export const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const ContactCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  transition: transform 0.3s;
  width: 200px;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

export const ContactIcon = styled.span`
  font-size: 48px;
  margin-right: 10px;
  transform: scale(1.2);
`;

export const ContactText = styled.span`
  font-size: 18px;
`;
