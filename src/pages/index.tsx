import Head from 'next/head'
import type { NextPage } from 'next'
import styles from '@/src/styles/scss/index.module.scss'
import Image from "next/image";
import foto from '@/src/public/images/FotoPedro.jpeg'
import NavbarMobile from '@/src/components/NavBarMobile';



export default function Home() {
  return (
    <>

      <NavbarMobile/>

      <main className={styles.Home}>
       
       <header className={styles.Home_top}>
        <div className={styles.foto_de_perfil}>
          <a href="https://github.com/Pedro-Grimaldi-Hansel" target="_blank" rel="noreferrer"><Image alt='Foto de perfil' src={foto}/></a>
        </div>
       </header>

       <section className={styles.Home_text}>
        <h1>&lt;&gt;Pedro Grimaldi Hansel&lt;/&gt;</h1>
        <p> Sou estudante de graduação em Ciências Exatas e Ciências da Computação (UFJF) e trabalho atualmete como desenvolvedor, gerente de projetos e conselheiro multiplicador na Code Empresa Jr de computação.</p>
       </section>

       <section className={styles.GitHubStats}>
        <a href="https://github.com/Pedro-Grimaldi-Hansel" target="_blank" rel="noreferrer">
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Pedro-Grimaldi-Hansel&count_private=true&layout=compact&bg_color=0E1116&text_color=ffffff&title_color=ffffff&border_radius=25"/>
        </a>
       </section>

      </main>
      
    </>
  )
}
