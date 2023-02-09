import type { NextPage } from 'next'
import Link from "next/link";
import React from "react";
import styles from "./NavBarMobile.module.scss";

const Navbar = () => {
    return (
      <section className={styles.NavBar}>
        <Link href="/">Home</Link>
        <Link href="/Sobre">Sobre</Link>
        <Link href="/Skills">Skills</Link>
        <Link href="/Contato">Contato</Link>
      </section>
    );
  };
  
  export default Navbar;
