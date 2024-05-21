import type { NextPage } from 'next'
import Link from "next/link";
import React from "react";
import styles from "./NavBar.module.scss";

const Navbar = () => {
    return (
      <>
        <nav className={styles.navContainer}>
            <section className={styles.navbar}>
                <div className={styles.esq}>
                    <Link className={styles.link} href="/">Home</Link>
                </div>

                <div className={styles.dir}>
                    <Link className={styles.link} href="/Sobre">Sobre</Link>
                    <Link className={styles.link} href="/Skills">Skills</Link>
                    <Link className={styles.link} href="/Contato">Contato</Link>
                </div>
            </section>
        </nav>
      </>
    );
  };
  
  export default Navbar;