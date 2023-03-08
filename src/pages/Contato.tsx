import CardContato from '@/src/components/CardContato'
import Navbar from '@/src/components/NavBarMobile'
import TutuloPaginaMobile from '@/src/components/TutuloPaginaMobile'
import type { NextPage } from 'next'

import styles from '../styles/scss/contato.module.scss'

const Contato = () => {
  return (  
    <>
        
        <TutuloPaginaMobile pagina="Contato"/>

          <header className={styles.Contato_infos}>
            <h2>Email:</h2>
            <p>pedroghansel@gmail.com</p>
            <hr/>
            <h2>Celular:</h2>
            <p>+55 (24) 99944-9717</p>
            <hr/>
            <h2>Endereço:</h2>
            <p>Av. Pres. Costa e Silva, 2391 - São Pedro, Juiz de Fora - MG</p>
            <hr/>
          </header>

          <CardContato/>

        <Navbar/>
    </>  
  )
}

export default Contato