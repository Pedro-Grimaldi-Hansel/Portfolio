import type { NextPage } from 'next'
import Navbar from '@/components/NavBar'
import styles from '../styles/scss/skills.module.scss'
import TutuloPaginaMobile from '@/components/TutuloPaginaMobile'

const Skills = () => {
  return (  
    <>
        <Navbar/>   
        <TutuloPaginaMobile pagina="Skills"/> 
    </>  
  )
}

export default Skills