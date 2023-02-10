import type { NextPage } from 'next'
import Navbar from '@/components/NavBarMobile'
import styles from '../styles/scss/sobre.module.scss'
import TutuloPaginaMobile from '@/components/TutuloPaginaMobile'
import Image from "next/image";

import foto1 from '@/public/images/EMEJFim.jpeg'
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
            
          </section>

        </section>
        <Navbar/>
        
      </>  
    )
  }
  
  export default Sobre
  