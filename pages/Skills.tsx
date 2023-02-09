import type { NextPage } from 'next'
import Navbar from '@/components/NavBarMobile'
import styles from '../styles/scss/skills.module.scss'
import TutuloPaginaMobile from '@/components/TutuloPaginaMobile'

const Skills = () => {
  return (  
    <>
           
        <TutuloPaginaMobile pagina="Skills"/> 
        <Navbar/>
    </>  
  )
}

export default Skills