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
            <p>Tenho contato com C++ na faculdade tendo como linguagem base para o estudo de diversas disciplinas, como algoritimos, estrutura de dados, estrutura de dados avançadas, grafos e cálculo numérico.</p>
          </div>
          <hr />

          <div className="language">
            <h2>HTML/CSS</h2>
            <p className={styles.subtitulo}>- Bootstrap, SASS, SEO</p>
            <p>Meu primeiro contato com programação WEB foi por meio de HTML e CSS na criação de sites espositivos durante o processo treinee da Code Jr. e fui aperfeiçondo e mantendo contato com as linguagens durante minha evolução no desenvolvimento web.</p>
          </div>
          <hr />
          
          <div className="language">
            <h2>JavaScript</h2>
            <p className={styles.subtitulo}>- React.js, Next.js, Node.js, API's</p>
            <p>Trabalhei diretamente com JS, para front-end e back-end, como desenvolvedor e gerente de projetos na Code Jr. e estágiario em engenharia de software na LEVTY, atuando com a linguagem pura e os frameworks React.js, Next.js e Node.js, desenvolvendo API's REST e utilizando de API's SOAP e REST e realizando conexoes com o banco de dados.</p>
          </div>
          <hr />
          
          <div className="language">
            <h2>PHP</h2>
            <p className={styles.subtitulo}>- Laravel, MVC, MySQL</p>
            <p>Trabalhei com PHP durante o processo treinee da Code Jr. e juntamente com o framework Laravel e o conceito MVC desenvolvi em equipe um e-comerce funcional usando o banco de dados MySQL.</p>
          </div>
          
        </main>
      
    </>  
  )
}

export default Skills