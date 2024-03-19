import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Construir pontes entre conceitos e
          <br /> Códigos
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"blueviolet"}}>Tecnologias</motion.b>Frequentes
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>React</h2>
          <p>
          Utilizada para desenvolvimento de interfaces modernas e responsivas. Com sua arquitetura baseada em componentes, 
          React permite uma abordagem modular e reutilizável no desenvolvimento de aplicativos web. 
          Utilizando conceitos como o virtual DOM, é possível criar páginas dinâmicas e de alto desempenho.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Node.js</h2>
          <p>
          Com o NodeJS, é possível construir servidores robustos e eficientes, 
          lidar com grandes volumes de solicitações de forma assíncrona e implementar APIs RESTful de alto desempenho. 
          Sua vasta gama de bibliotecas e sua comunidade ativa tornam o Node.js uma escolha poderosa para a construção de infraestrutura de back-end moderna.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>MySQL</h2>
          <p>
          MySQL é um sistema open-source de gerenciamento de base de dados relacional SQL, utilizada para armazenamento e gerenciamento de dados confiável e escalável. 
         com isso é possível projetar esquemas de banco de dados eficientes e implementar consultas otimizadas para atender às demandas específicas das aplicações.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Java</h2>
          <p>
          Java é uma linguagem versátil e robusta, utilizada para desenvolver uma ampla gama de aplicativos, desde sistemas corporativos até aplicativos móveis Android. 
          Minha experiência em Java abrange o desenvolvimento aproveitando os princípios de orientação a objetos e o vasto ecossistema de frameworks Java, 
          como Spring e Hibernate, para fornecer soluções confiáveis e eficientes.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
