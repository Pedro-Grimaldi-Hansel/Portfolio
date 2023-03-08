import type { NextPage } from 'next'
import Link from "next/link";
import React from "react";
import styles from "./NavBarMobile.module.scss";

const Navbar = () => {
    return (
      <>
        <section className={styles.NavBar}>
          <p><Link href="/">Home</Link></p>
          <p><Link href="/Sobre">Sobre</Link></p>
          <p><Link href="/Skills">Skills</Link></p>
          <p><Link href="/Contato">Contato</Link></p>
        </section>
      </>
    );
  };
  
  export default Navbar;
