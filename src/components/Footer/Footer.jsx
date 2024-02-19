import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:claudio.larrosasm@gmail.com">claudio.larrosasm@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/claudio-larrosa-san-martin-1a891116/">linkedin.com/Claudio Larrosa San Martin</a>
        </li>

      </ul>
    </footer>
  )
}
