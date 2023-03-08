import type { NextPage } from 'next'
import React from "react";
import styles from "./TutuloPaginaMobile.module.scss";
import Image from "next/image";
import foto from '@/src/public/images/FotoPedro.jpeg'
import Link from 'next/link';

interface IPaginas{
    pagina:string;
}

const TutuloPaginaMobile = (props:IPaginas) => {
    return (
      <> 
      <section className={styles.TutuloPaginaMobile}>
        <h1>&lt;&gt;{props.pagina}&lt;/&gt;</h1>
      </section>

      </>
    );
  };
  
  export default TutuloPaginaMobile;
