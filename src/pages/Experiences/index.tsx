import { HeaderPage } from "../../components/Header";
import { ExperiencePage, TimelineContainer, TimelineContent, TimelineDot, TimelineItem, TimelineConnector, TimelineText } from "./styles";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export function Experiences() {
  return (
    <ExperiencePage>
      <HeaderPage />
      <TimelineContainer>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#0A192F', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #2B6370' }}
            iconStyle={{ background: '#2B6370', color: '#fff' }}
            icon={<TimelineDot />}
          >
            <TimelineContent>
              <h3 className="vertical-timeline-element-title">Project Name 1</h3>
              <p>
                Description of project 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed justo non ex consequat feugiat.
              </p>
            </TimelineContent>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#0A192F', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #2B6370' }}
            iconStyle={{ background: '#2B6370', color: '#fff' }}
            icon={<TimelineDot />}
          >
            <TimelineContent>
              <h3 className="vertical-timeline-element-title">Project Name 2</h3>
              <p>
                Description of project 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed justo non ex consequat feugiat.
              </p>
            </TimelineContent>
          </VerticalTimelineElement>
          {/* Adicione mais elementos VerticalTimelineElement conforme necessário */}
        </VerticalTimeline>
      </TimelineContainer>
    </ExperiencePage>
  )
}
