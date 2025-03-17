import { getImageUrl } from '../../utils';
import { useContext } from 'react';
import { LanguageContext } from '../LanguageProvider/LanguageProvider';
import styles from './Hero.module.css';

export const Hero = () => {
    const { language } = useContext(LanguageContext);

    const textContent = {
        en: {
            title: "Hi, I'm Claudio",
            description1: `My interest in technology began at a young age when I first got my hands on a personal computer. I was fascinated by the "magic" that brought games like Prince of Persia to life on the screen. This curiosity, coupled with the necessity of being able to repair electronics in Argentina due to their cost and scarcity, led me to pursue a career in technology. `,
            description2:
                `I started my professional journey in 2007, providing consulting services to companies through my own small enterprise. Relocating to the United States in 2013 provided me with access to a wider range of corporate tools and technologies, which I continue to work with today.`,
            contact: "Contact Me"
        },
        es: {
            title: "Hola, soy Claudio",
            description1: `Mi interés por la tecnología comenzó desde muy joven, cuando tuve en mis manos una computadora personal por primera vez. Me fascinaba la "magia" que hacía que juegos como Prince of Persia cobraran vida en la pantalla. Esta curiosidad, junto con la necesidad de aprender a reparar electrónicos en Argentina debido a su alto costo y escasez, me llevó a seguir una carrera en tecnología.`,
            description2: `
                Inicié mi camino profesional en 2007, brindando servicios de consultoría a empresas a través de mi propia pequeña empresa. Al mudarme a Estados Unidos en 2013, tuve acceso a una mayor variedad de herramientas y tecnologías corporativas, con las que sigo trabajando hasta el día de hoy.`,
            contact: "Contactame"
        }
    };


    const { title, description1, description2, contact } = textContent[language];

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description1}</p>
                <p className={styles.description}>{description2}</p>
                <a href="mailto:claudio.larrosasm@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.contact}>{contact}</a>
            </div>
            <img src={getImageUrl("img/Claudio-new.png")} alt="hero image of me" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur}></div>
        </section>
    );
};
