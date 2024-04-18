import type { NextPage } from 'next'

import styles from '@/src/styles/scss/sobre.module.scss'
import TutuloPaginaMobile from '@/src/components/TutuloPaginaMobile'
import Image from "next/image";

import foto1 from '@/src/public/images/EMEJFimedited.jpeg'
import foto2 from '@/src/public/images/RRPaineledited.jpeg'
import NavBarMobile from '@/src/components/NavBarMobile';

const Sobre = () => {
    return (  
      <>
        <NavBarMobile/>
        <main className={styles.Sobre}>
  
          <section>
            <h1>Sobre Mim</h1>

            <p>Tenho contato com programação há mais de 3 anos e sigo buscando me qualificar ainda mais nas tecnologias com que trabalho, como C++, PHP, JavaScript, ReactJs, NextJs e NodeJs para poder me inserir no mercado de trabalho nacional e internacional! Sou comunicativo, proativo e muito empenhado em melhorar como pessoa e como profissional.</p>
            <hr/>

            <h2>Experiencias</h2>
            <p>Durante meu periodo na Code jr atuei como desenvolvedor e também como gerente de projetos onde atuava do início ao fim dos projetos, levantando e validando requisitos, gerenciando os desenvolvedores, tendo uma rotina de sprints reviews direto com os clientes e ao final realizava a entrega do projeto. Durante todas as etapas me era nescessario saber lidar e entender as nescessidades do cliente, ter conhecimentos sobre documentação, diagramas UML, metodologias ágeis e o conhecimento tecnico para orientar e ajudar os desenvolvedores e conseguir realizar o deploy e hosting dos projetos.</p>
            <hr/>

            <p>Em meu estágio na LEVTY, junto a equipe que fazia parte, desenvolvia soluções para o setor de comércio e gerência de energia, para o front-end e back-end, em JavaScript e React.js utilizando a plataforma SYDLE ONE, trabalhando com muitos conceitos de Programação Orientada a Objetos e Modelagem de Processos na prática.</p>
            <hr/>

            <p>Tive a oportunidade de participar de varios eventos empresariais por Minas Gerais que me permitiram aprender muito e ampliar minha rede de contatos e conhecer pessoas não só da minha área.</p>
            
          </section>
        
        </main>
      </>  
    )
  }
  
  export default Sobre
  