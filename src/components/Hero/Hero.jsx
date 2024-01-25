import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Claudio</h1>
                <p className={styles.description}>Since I was a child, and I got my first personal computer, I have always been interested in knowing what "magic" made my prince of Persia show up on the screen and gave me hours of entertainment. I'm curious by nature so it was a natural process. When you were Growing up in Argentina it was mandatory to be able to repair your electronics since tech is expensive and not always easy to get. I got my first Gig in Support back in 2007 with this small enterprise I used to own doing consulting for companies over there. When I moved to the United States in 2013 it opened to me the doors of a more corporate array of tools which I am still working with till this day. </p>
                <a href="mailto:myemail@email.com" className={styles.contact}>Contact Me</a>
            </div>
            <img src={getImageUrl("img/Claudio.png")} alt="hero image of me" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur}></div>
        </section>
    )
}

