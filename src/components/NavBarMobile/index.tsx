import type { NextPage } from 'next'
import Link from "next/link";
import React from "react";
import styles from "./NavBarMobile.module.scss";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/Si";
import { ImProfile } from "react-icons/im";
import { GiSkills } from "react-icons/gi";
import { HiOutlineCode } from "react-icons/hi";
import { BiMessageDetail } from "react-icons/bi";

const Navbar = () => {
    return (
      <>
        <section className={styles.NavBar}>
          <Link href="/"><AiFillHome/></Link>
          <Link href="/Sobre"><ImProfile/></Link>
          <Link href="/Skills"><GiSkills/></Link>
          <Link href="/Projetos"><HiOutlineCode/></Link>
          <Link href="/Contato"><BiMessageDetail/></Link>
        </section>
      </>
    );
  };
  
  export default Navbar;
