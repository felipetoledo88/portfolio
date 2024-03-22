import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Transporte e Cargas",
    img: "https://img.freepik.com/fotos-gratis/um-caminhao-com-um-reboque-branco-que-diz-scania-na-lateral_123827-23486.jpg?size=626&ext=jpg&ga=GA1.1.1269040533.1710374400&semt=ais",
    desc: "Aprimoramento e manutenção de um sistema abrangente de gestão logística. Este projeto abrangia a concepção e implementação de uma plataforma Web utilizando tecnologias React e NodeJS, bem como o desenvolvimento de uma aplicação móvel em React Native. A arquitetura incluía integração de Microserviços, configuração de Pipelines, e implementação de APIs. O propósito central era oferecer funcionalidades como rastreamento de cargas, gestão de frotas e controle de estoque, visando otimizar operações logísticas de forma eficiente.",
  },
  {
    id: 2,
    title: "Medicina do Trabalho",
    img: "https://d3043uog1ad1l6.cloudfront.net/uploads/2020/06/medicina-tecnologia.jpg",
    desc: "Participei ativamente como Tech Lead em um projeto de Medicina do Trabalho, no qual liderei o desenvolvimento de uma plataforma de gestão voltada para a geração dinâmica de documentos essenciais nessa área, tais como PGR, PCMSO e ASO. Nosso principal objetivo era proporcionar uma solução completa e eficiente para simplificar e agilizar os processos relacionados à medicina ocupacional. Por meio de uma abordagem centrada no usuário e da aplicação de tecnologias modernas, conseguimos criar uma plataforma intuitiva e altamente funcional que atendia às necessidades específicas desse setor, garantindo conformidade e eficácia em todos os aspectos da gestão de saúde no ambiente de trabalho.",
  },
  {
    id: 3,
    title: "Gestão de Rotinas",
    img: "https://rubenscury.com.br/blog/wp-content/uploads/2023/08/2-Relogio-usa-Inteligencia-Artificial-para-auxiliar-no-diagnostico-precoce-de-Parkinson.jpg",
    desc: "Participei de um projeto inovador de Gestão de Rotinas e Atividades, desenvolvido em Kotlin para um Smartwatch. Nosso objetivo principal era utilizar a tecnologia de geolocalização do Smartwatch para certificar que os operadores estivessem executando suas atividades de rotina de forma eficaz. Através da proximidade via GPS, o sistema garantia que as tarefas fossem realizadas nos locais designados, registrando o percurso percorrido e fornecendo uma visualização clara das verificações realizadas em cada ponto. Essa abordagem não apenas aumentava a eficiência operacional, mas também oferecia insights valiosos para otimizar ainda mais os processos de gestão de rotinas e atividades",
  },
  {
    id: 4,
    title: "I.A",
    img: "https://curtonews.com/wp-content/wp-uploads/2023/10/Captura-de-Tela-2023-07-28-as-23.02.21-aspect-ratio-930-440.png",
    desc: "Participei do desenvolvimento de um projeto inovador de sistema de cobranças, no qual integramos uma plataforma em uma inteligência artificial para conduzir as cobranças de forma inteligente. Nossa abordagem combinou tecnologia integrada da IA para automatizar e otimizar o processo de cobrança. Isso possibilitou uma forma mais personalizada e eficiente, adaptando-se dinamicamente às necessidades e comportamentos dos devedores. O resultado foi um sistema capaz de melhorar significativamente a taxa de recuperação de créditos e proporcionar uma experiência mais satisfatória tanto para os clientes quanto para os gestores de cobrança.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img className="image" src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projetos e Experiências</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
