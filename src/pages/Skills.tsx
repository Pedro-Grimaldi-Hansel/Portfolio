import type { NextPage } from 'next'
import NavbarMobile from '@/src/components/NavBarMobile'
import styles from '@/src/styles/scss/skills.module.scss'
import TutuloPaginaMobile from '@/src/components/TutuloPaginaMobile'

const Skills = () => {
  return (  
    <>
      <TutuloPaginaMobile pagina="Skills"/>
      <NavbarMobile/>
        <main className={styles.Skills}>
          
          <div className="language">
            <h2>C++</h2>
            <p>Tenho contato com C++ na faculdade tendo como linguagem base para o estudo de diversas disciplinas, como algoritimos, estrutura de dados avançadas e grafos.</p>
          </div>
          <hr />

          <div className="language">
            <h2>HTML/CSS</h2>
            <p>Meu primeiro contato com programação WEB foi por meio de HTML e CSS na criação de sites espositivos basicos durante o processo treinee da Code Jr. e mantive o contato com as linguagens durante minhas outras experiencias.</p>
          </div>
          <hr />
          
          <div className="language">
            <h2>PHP</h2>
            <p>Trabalhei com PHP durante o processo treinee da Code Jr. e juntamente com o framework Laravel desenvolvi em equipe um e-comerce completamente funcional usando banco de dados com o MYSQL</p>
          </div>
          <hr />
          
          <div className="language">
            <h2>JavaScript</h2>
            <p>Trabalhei diretamente com JS, para front-end e back-end, como desenvolvedor e gerente de projetos na Code Jr. e estágiario em engenharia de software na LEVTY, atuando com a linguagem pura e os frameworks React.js, Next.js e Node.js e realizando conexoes com o banco de dados Mongo DB via API's Rest.</p>
          </div>
          <hr />

        </main>
      
    </>  
  )
}

export default Skills