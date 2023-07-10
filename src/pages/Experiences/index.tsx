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
      <h3 className="vertical-timeline-element-title">Empresa de Transporte e Cargas</h3>
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
      <h3 className="vertical-timeline-element-title">Empresa de Gestão de Estoque</h3>
    </div>
              <p>
              Participei do desenvolvimento do aplicativo, um sistema de gestão de estoque para empresas. A aplicação permitia o registro de entrada e saída de produtos, controle de estoque em tempo real e geração de relatórios de desempenho na web.
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
      <h3 className="vertical-timeline-element-title">Empresa de concessão de créditos</h3>
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
              <h3 className="vertical-timeline-element-title">Empresa de empréstimos consignados</h3>
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
              <h3 className="vertical-timeline-element-title">Empresa de cobranças</h3>
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
