import type { NextPage } from 'next'
import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "./CardContato.module.scss";
import { BsWhatsapp, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

//import dos icones

import gmail from '../../public/images/gmail.webp'
import linkedin from '../../public/images/linkedin.svg'
import insta from '../../public/images/insta.png'

const CardContato = () => {
    return (
        <>
            
            <section className={styles.CardContato}>
                
                <h2>Rede Sociais:</h2>
                
                <div className={styles.Container}>

                    <div className={styles.icone}>
                        <a href="https://github.com/Pedro-Grimaldi-Hansel" target="_blank" rel="noreferrer">
                        <BsGithub fontSize="45px"/></a>
                    </div>

                    <div className={styles.icone}>
                        <a href="https://www.linkedin.com/in/pedro-grimaldi-hansel-54b851217/" target="_blank" rel="noreferrer">
                        <BsLinkedin fontSize="45px"/></a>
                    </div>

                    <div className={styles.icone}>
                        <a href="https://www.instagram.com/pedro_grimaldi_hansel/" target="_blank" rel="noreferrer">
                        <BsInstagram fontSize="45px"/></a>
                    </div>

                    <div className={styles.icone}>
                        <a href="https://api.whatsapp.com/send?phone=5524999449717" target="_blank" rel="noreferrer">
                        <BsWhatsapp fontSize="45px"/></a>
                    </div>
                    
                </div>    

            </section>
      </>
    );
  };
  
  export default CardContato;
