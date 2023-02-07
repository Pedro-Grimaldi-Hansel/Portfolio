import CardContato from '@/components/CardContato'
import type { NextPage } from 'next'
import Navbar from '../components/NavBar'
import styles from '../styles/scss/contato.module.scss'

const Contato = () => {
  return (  
    <>
        <Navbar/>
        <section className={styles.Contato}>
          <section className={styles.Contato_top}>
            <h1>Contato</h1>
          </section> 
          <section className={styles.Contato_infos}>
            <h2>Email:</h2>
            <p>pedroghansel@gmail.com</p>
            <h2>Celular:</h2>
            <p>+55 (24) 99944-9717</p>
            <h2>Endereço:</h2>
            <p>Av. Pres. Costa e Silva, 2391 - São Pedro, Juiz de Fora - MG</p>
          </section>
          <CardContato/>
        </section>

    </>  
  )
}

export default Contato