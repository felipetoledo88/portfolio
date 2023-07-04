import styled from 'styled-components';

export const ExperiencePage = styled.div`
  background: linear-gradient(to bottom, #0A192F 0%, #2B6370 100%, #49B6A6 100%);
  height: 100vh;
  width: 100%;

  @media (max-width: 767px) {
    height: auto;
    min-height: 100vh;
    padding-bottom: 40px;
  }
`;

export const TimelineContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;`

export const TimelineContent = styled.div`
  margin-bottom: 20px;
`;

export const TimelineDot = styled.span`
  background-color: #FFFF;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: block;
`;

export const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const TimelineConnector = styled.div`
  width: 2px;
  background-color: #2B6370;
  flex: 1;
`;

export const TimelineText = styled.div`
  margin-left: 20px;
`;
