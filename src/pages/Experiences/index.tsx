import { HeaderPage } from "../../components/Header";
import { ExperiencePage, TimelineContainer, TimelineContent, TimelineDot, TimelineItem, TimelineConnector, TimelineText, LogoProject } from "./styles";
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
    <div className="timeline-element-header">
      <LogoProject className="project-image" src="https://img.swapcard.com/?u=https%3A%2F%2Fcdn-api.swapcard.com%2Fpublic%2Fimages%2F502839264f754501a74f6454b4b0dc7a.png&q=0.8&m=fit&w=400&h=200" alt="Coopercarga Logo" />
      <h3 className="vertical-timeline-element-title">Coopercarga</h3>
    </div>
    <p>
      Desenvolvimento e sustentação de um sistema de gestão de logística para a empresa. O projeto envolve a criação de uma plataforma web abrangente, fornecendo recursos como rastreamento de cargas, gestão de frota e controle de estoque.
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
    <div className="timeline-element-header">
      <LogoProject className="project-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfWyd9fYM2QZKuSqlXB75EhQZIeiVEUYZRbX89zHcX1SOhIvm4unyiYgy3dbAnU-5nWOU&usqp=CAU" alt="Coopercarga Logo" />
      <h3 className="vertical-timeline-element-title">Gestox</h3>
    </div>
              <p>
              Participei do desenvolvimento do aplicativo Gestox, um sistema de gestão de estoque para empresas. A aplicação permitia o registro de entrada e saída de produtos, controle de estoque em tempo real e geração de relatórios de desempenho na web.
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
    <div className="timeline-element-header">
      <LogoProject className="project-image" src="https://media.licdn.com/dms/image/C4D0BAQHTqoGG9j66wQ/company-logo_200_200/0/1571922472346?e=2147483647&v=beta&t=ZkhD9lvWxizcrfOluowGQ6a2QCxW55bbR7JEWKooz10" alt="Coopercarga Logo" />
      <h3 className="vertical-timeline-element-title">Cessão de Créditos</h3>
    </div>
              <p>
              Contribuí para o desenvolvimento de um sistema online para facilitar a cessão de créditos entre empresas. O projeto envolveu a criação de uma plataforma segura e eficiente, permitindo que as empresas pudessem transferir e negociar créditos de forma simplificada.
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
              <h3 className="vertical-timeline-element-title">Consignado</h3>
              <p>
              Fui parte da equipe responsável pelo desenvolvimento de um sistema de empréstimo consignado. O projeto incluiu a criação de um portal web para solicitação de empréstimos, análise de crédito e geração de contratos.
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
              <h3 className="vertical-timeline-element-title">Meu Cobrador</h3>
              <p>
              Participei do projeto de gestão de cobranças para empresas, no qual desempenhei um papel na migração bem-sucedida do sistema de nuvem da AWS para a plataforma Google Cloud. Através dessa migração, otimizamos a infraestrutura e garantimos maior escalabilidade e desempenho para a aplicação. 
              </p>
            </TimelineContent>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </TimelineContainer>
    </ExperiencePage>
  )
}
