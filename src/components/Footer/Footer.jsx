import React, { useContext } from 'react';
import { getImageUrl } from '../../utils';
import { LanguageContext } from '../LanguageProvider/LanguageProvider';
import styles from './Footer.module.css';

export const Footer = () => {
  const { language } = useContext(LanguageContext);

  const textContent = {
    en: {
      title: 'Contact',
      description: 'Feel free to reach out!',
      email: 'claudio.larrosasm@gmail.com',
      linkedin: 'linkedin.com/Claudio Larrosa San Martin',
    },
    es: {
      title: 'Contacto',
      description: '¡No dudes en contactarme!',
      email: 'claudio.larrosasm@gmail.com',
      linkedin: 'linkedin.com/Claudio Larrosa San Martín',
    }
  };

  const { title, description, email, linkedin } = textContent[language];

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl('contact/emailIcon.png')} alt="Email icon" />
          <a href="mailto:claudio.larrosasm@gmail.com" target="_blank" rel="noopener noreferrer">{email}</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl('contact/linkedinIcon.png')}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/claudio-larrosa-san-martin-1a891116/">{linkedin}</a>
        </li>
      </ul>
    </footer>
  );
};
