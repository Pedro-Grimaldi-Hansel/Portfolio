import type { NextPage } from 'next'
import Navbar from '@/components/NavBar'
import styles from '../styles/scss/sobre.module.scss'
import TutuloPaginaMobile from '@/components/TutuloPaginaMobile'

const Sobre = () => {
    return (  
      <>
        <Navbar/>
        <TutuloPaginaMobile pagina="Sobre Mim"/>
      </>  
    )
  }
  
  export default Sobre
  