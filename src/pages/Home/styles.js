import styled from 'styled-components';
import { Button, Row } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';

export const HomePage = styled.div`
  background-image: url('https://free4kwallpapers.com/uploads/originals/2021/03/20/cool-planet-polygon-wallpaper.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  font-family: 'Italiana', serif;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  height: calc(100% - 64px); /* Subtrai a altura do header */
`;

export const SmallText = styled.p`
  color: #49B6A6;
  font-size: 25px;
  font-family: 'Chakra Petch', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const LargeText = styled.h1`
  color: #e6e6e6;
  font-size: 80px;
  margin: 16px 0;
  font-family: 'Chakra Petch', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const TypeAnimationStyled = styled(TypeAnimation)`
  color: #e6e6e6;
  font-size: 80px;
  margin: 16px 0;
  font-family: 'Chakra Petch', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const Description = styled.p`
  color: #c4c4c4;
  font-size: 35px;
  font-family: 'Chakra Petch', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export const RowStyled = styled(Row)`
  margin-left: 3%;
`;

export const CustomButton = styled(Button)`
  background-color: transparent;
  border-color: #49B6A6 !important;
  color: #49B6A6;
  font-family: 'Chakra Petch', sans-serif;
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;

  &:hover,
  &:active {
    background-color: #49B6A6;
    border-color: #49B6A6 !important;
    color: #fff;
  }
`;