import styled from 'styled-components';

export const AboutMePage = styled.div`
  background: linear-gradient(to bottom, #0A192F 0%, #2B6370 100%, #49B6A6 100%);
  height: 100vh;
  width: 100%;

  @media (max-width: 767px) {
    height: auto;
    min-height: 100vh;
    padding-bottom: 40px;
  }
`;
export const Text = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;

export const Image = styled.img`
width: 250px;
height: 250px;
  object-fit: cover;
  border-radius: 50%;
`;

export const TechnologyImage = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const TechnologiesTitle = styled.h2`
  color: #fff;
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const TitleDev = styled.h2`
  color: #fff;
  font-size: 24px;
  margin-top: 10%;
`;

export const SubtitleDev = styled.h2`
  color: #fff;
  font-size: 20px;
`;

export const DescriptionStyled = styled(Text)`
color: white;
`