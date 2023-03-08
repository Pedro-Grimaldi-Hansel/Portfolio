import CardContato from '@/src/components/CardContato'
import Navbar from '@/src/components/NavBarMobile'
import TutuloPaginaMobile from '@/src/components/TutuloPaginaMobile'
import type { NextPage } from 'next'
import Formulario from '@/src/components/Formulario'

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
          </header>

          <CardContato/>

          <Formulario/>

        <Navbar/>
    </>  
  )
}

export default Contato