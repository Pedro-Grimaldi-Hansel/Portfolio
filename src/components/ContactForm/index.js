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
          }, 5000));
        }
      })
      .catch((error) => {
        console.error('Error occurred while sending email:', error);
        setError('Erro ao enviar email. Tente novamente mais tarde.');
        setTimeoutId(setTimeout(() => {
          setError(null);
        }, 5000));
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
        <div>
          <label>
            Name:
          </label>
          <input type="text" onChange={(e)=>{setName(e.target.value)}} name="name"/>
        </div>

        <div>
          <label>
            Email:
          </label>
          <input type="email" onChange={(e)=>{setEmail(e.target.value)}} name="email"/>
          
        </div>
        
        <div>
          <label>
            Message:
          </label>
          <input type="text" onChange={(e)=>{setMessage(e.target.value)}} name="message"/>
        </div>

        <div>
          <input type="submit" onClick={(e)=>{handleSubmit(e)}}/>
        </div>

      </form>
    </section>
    {submitted && <p className={styles.success}>Email enviado com sucesso!</p>}
    {error && <p className={styles.error}>{error}</p>}
    </>
  );
};
