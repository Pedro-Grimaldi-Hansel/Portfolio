import type { NextPage } from 'next'
import Link from "next/link";
import React from "react";
import styles from "./CardContato.module.scss";

const CardContato = () => {
    return (
      <section className={styles.CardContato}>
        <div className={styles.Container}>
             <div className={styles.gmail}>
                <a href="mailto:pedroghansel@gmail.com" target="_blanck" rel="noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                alt="Pedro-Gmail" height="40" width="40" placeholder="blur" /></a>
            </div>

            <div className={styles.linkedin}>
                <a href="https://www.linkedin.com/in/pedro-grimaldi-hansel-54b851217/" target="_blank" rel="noreferrer">
                <img alt="Pedro-LinkedIn" height="40" width="40" placeholder="blur"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"/></a>
            </div>

            <div className={styles.instagram}>
                <a href="https://www.instagram.com/pedro_grimaldi_hansel/" target="_blank" rel="noreferrer">
                <img alt="Pedro-Instagram" height="40" width="40" placeholder="blur"
                src="https://feronconi.com.br/wp-content/uploads/2019/07/instagram-new-2016-logo-4773FE3F99-seeklogo.com_.png"/></a>
            </div>

            <div className={styles.github}>
                <a href="https://github.com/Pedro-Grimaldi-Hansel" target="_blank" rel="noreferrer">
                <img alt="Pedro-GitHub" height="40" width="40" placeholder="blur"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"/></a>
            </div>

            <div className={styles.whatsapp}>
                <a href="https://api.whatsapp.com/send?phone=5524999449717" target="_blank" rel="noreferrer">
                <img alt="Pedro-whatsapp" height="40" width="40" placeholder="blur"
                src="https://seeklogo.com/images/W/whatsapp-logo-112413FAA7-seeklogo.com.png"/></a>
            </div>
        </div>    
      </section>
    );
  };
  
  export default CardContato;
