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
        
          <header>
            <Image alt='Foto da RR' src={foto2}/>
          </header>

          <section>
            <h1>Sobre Mim</h1>

            <p>Olá meu nome é Pedro, tenho 19 anos curso Ciência da Computação e trabalho como desenvolvedor e gerente de projetos.</p>
            <hr/>

            <p>Sou uma pessoa muito comunicativa, com vontade de aprender e dedicação para me manter aprendendo cada dia mais.</p>
            <hr/>

            <p>Como desenvolvedor tenho o trabalho de apresentar codigos de facil manutenibilidade, que respeitem determinada
                arquitetura e atendam todas as necessidades dos clientes de forma intuitiva e com um otimo desenvolvimento de UX e Ui.</p>
            <hr/>

            <p>Já como Gerente de Projetos acompanho o projeto desde sua precificação, desenvolvimento de sprints e alocação de
                desenvolvedores, apos o inicio do projeto sou encarregado de delegar tarefas aos desenvolvedores, auxilia-los e
                orienta-los em possiveis dificuldades e unir em todas as atuais ramificações do codigo em um arquivo principal,
                sempre garantindo a qualidade do produto.</p>
            <hr/>

            <p>Tive a oportunidade de participar de alguns eventos empresariais que me permitiram ampliar minha rede de contatos e
                conhecer pessoas influentes na minha área, e melhorar minhas Soft-Skills.</p>
            
          </section>
        
        </main>
      </>  
    )
  }
  
  export default Sobre
  