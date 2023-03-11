import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ContactForm.module.scss';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const handleSubmit = (e) => { 
    e.preventDefault();
    if (!validateEmail(email)) {
      alert('Por favor, insira um endereço de email válido!');
      return;
    }

    console.log('Sending');
    let data = {
      name,
      email,
      message
    };
    axios.post('/api/contact', data)
      .then((res) => {
        console.log('Response received');
        if (res.status === 200) {
          console.log('Response succeeded!');
          setSubmitted(true);
          setName('');
          setEmail('');
          setMessage('');
          setTimeoutId(setTimeout(() => {
            setSubmitted(false);
          }, 8000));
        }
      })
      .catch((error) => {
        console.error('Error occurred while sending email:', error);
        setError('Erro ao enviar email. Tente novamente mais tarde.');
        setTimeoutId(setTimeout(() => {
          setError(null);
        }, 8000));
      });
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  }, [timeoutId]);

  return (
    <>
    <section className={styles.Contato_infos}>
      <form className={styles.container}>   
        
        <h2>Entre em contato por email:</h2>

          <label className={styles.primeiro}>
            Nome:
          </label>
          <input type="text" onChange={(e)=>{setName(e.target.value)}} name="name" placeholder='Ex: Pedro Grimaldi Hansel'/>

          <label>
            Email:
          </label>
          <input type="email" onChange={(e)=>{setEmail(e.target.value)}} name="email" placeholder='Ex: pedroghansel@gmail.com'/>
          
        
          <label>
            Mensagem:
          </label>
          <textarea type="text" placeholder="Ex: Olá boa tarde, gostaria de entrar em contato..." onChange={(e)=>{setMessage(e.target.value)}} name="message"></textarea>

          <input type="submit" onClick={(e)=>{handleSubmit(e)}}/>

      </form>
      {submitted && <p className={styles.success}>Email enviado com sucesso!</p>}
    {error && <p className={styles.error}>{error}</p>}
    </section>
    
    </>
  );
};
