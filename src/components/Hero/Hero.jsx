import { getImageUrl } from '../../utils';
import { useContext } from 'react';
import { LanguageContext } from '../LanguageProvider/LanguageProvider';
import styles from './Hero.module.css';

export const Hero = () => {
    const { language } = useContext(LanguageContext);

    const textContent = {
        en: {
            title: "Hi, I'm Claudio",
            description: `Since I was a child and got my first personal computer, I have always been interested in knowing what "magic" made my Prince of Persia show up on the screen and gave me hours of entertainment. I'm curious by nature, so it was a natural process. Growing up in Argentina, it was mandatory to be able to repair your electronics since tech is expensive and not always easy to get. I got my first gig in support back in 2007 with a small enterprise I used to own, doing consulting for companies. When I moved to the United States in 2013, it opened the doors to a more corporate array of tools, which I am still working with today.`,
            contact: "Contact Me",
        },
        es: {
            title: "Hola, soy Claudio",
            description: `Desde que era niño y tuve mi primera computadora personal, siempre me interesó saber qué "magia" hacía que el Prince of Persia apareciera en la pantalla y me brindara horas de entretenimiento. Soy curioso por naturaleza, así que fue un proceso natural. Crecer en Argentina hacía casi obligatorio saber reparar tus propios electrónicos, ya que la tecnología es costosa y no siempre fácil de conseguir. Obtuve mi primer trabajo en soporte en 2007 con una pequeña pyme que tenía, haciendo consultoría para empresas.. Cuando me mudé a Estados Unidos en 2013, se me abrieron las puertas a un entorno más corporativo, con herramientas con las que sigo trabajando hasta el día de hoy.`,
            contact: "Contáctame",
        }
    };

    const { title, description, contact } = textContent[language];

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>
                <a href="mailto:claudio.larrosasm@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.contact}>{contact}</a>
            </div>
            <img src={getImageUrl("img/Claudio-new.png")} alt="hero image of me" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur}></div>
        </section>
    );
};
