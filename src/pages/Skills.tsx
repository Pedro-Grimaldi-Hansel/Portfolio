import type { NextPage } from 'next'
import Navbar from '@/src/components/NavBarMobile'
import styles from '@/src/styles/scss/skills.module.scss'
import TutuloPaginaMobile from '@/src/components/TutuloPaginaMobile'

const Skills = () => {
  return (  
    <>
      <TutuloPaginaMobile pagina="Skills"/>
        <Navbar/>
    </>  
  )
}

export default Skills