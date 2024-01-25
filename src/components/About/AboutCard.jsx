import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

export const AboutCard = ({ title, description, iconImg }) => {

    return (

        <li className={styles.aboutItem}>
            <img className={styles.aboutImg} src={getImageUrl(iconImg)} alt="cursor" />
            <div className={styles.aboutItemText}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </li>

    );
};
