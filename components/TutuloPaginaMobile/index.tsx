import type { NextPage } from 'next'
import React from "react";
import styles from "./TutuloPaginaMobile.module.scss";

interface IPaginas{
    pagina:string;
}

const TutuloPaginaMobile = (props:IPaginas) => {
    return (
      <section className={styles.TutuloPaginaMobile}>
        <h1>{props.pagina}</h1>
      </section>
    );
  };
  
  export default TutuloPaginaMobile;
