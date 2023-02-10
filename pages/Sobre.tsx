import type { NextPage } from 'next'
import Navbar from '@/components/NavBarMobile'
import styles from '../styles/scss/sobre.module.scss'
import TutuloPaginaMobile from '@/components/TutuloPaginaMobile'
import Image from "next/image";

import foto1 from '@/public/images/EMEJFimedited.jpeg'
import foto2 from '@/public/images/RRPaineledited.jpeg'

const Sobre = () => {
    return (  
      <>

        <TutuloPaginaMobile pagina="Sobre Mim"/>
        
        <section className={styles.Sobre}>

          <section className={styles.Top}>
            <p>Olá meu nome é Pedro, tenho 19 anos sou estudante e trabalho como desenvolvedor e gerente de projetos.</p>
          </section>

          <section className={styles.Mid}>

            <div className={styles.Mid_Texto}>
              <p>Sou uma pessoa muito comunicativa, com vontade de aprender e muita dedicação para me manter aprendendo cada dia mais.</p>
            </div>

            <div className={styles.Mid_foto}>

              <Image alt='Foto do EMEJ' src={foto1}/>
        
            </div>

          </section>

          <section className={styles.Foto2}>
            <Image alt='Foto da RR' src={foto2}/>
          </section>

          <section className={styles.Bottom}>
            <p>Acredito que uns dos momentos profissionais mais importantes para mim foram ter participado de alguns
            eventos empresariais que me permitiram ampliar minha rede de contatos e conhecer
            pessoas influentes na minha área, e melhorar minhas Soft-Skills e tambem ter o cargo de Gerente de Projetos, o
            qual me fez desenvolver Hard-Skills e saber como lidar com precificação e documentação de projetos, correção de bugs
            principalmente em merges de branchs tanto no GitHub qunto no BitBucket e lidar diretamente com clientes e prazos de etrega 
            e planejamentos em geral.</p>
          </section>

        </section>
        <Navbar/>
        
      </>  
    )
  }
  
  export default Sobre
  