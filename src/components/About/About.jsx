import React from 'react'

import { AboutCard } from './AboutCard'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'


export const About = () => {
    return (
        <section id='about' className={styles.container}>

            <h2 className={styles.title}>This is how i build the best IT Experience</h2>
            <div className={styles.content}>
                <img src={getImageUrl("img/CL.png")} alt="image of me" className={styles.aboutImage} />
                <ul className={styles.aboutItems}>
                    <AboutCard
                        iconImg="about/icons8-it-100.png" title="IT Support"
                        description={<ul>
                            <li>Coverage from 8 am to 6 pm on business days and Coverage after hours with rotation if staffing is available.</li>
                            <li>Google Meet & Slack integrated with Halp or similar. Automated response built on with self service for users.</li>
                        </ul>}
                    />
                    <AboutCard
                        iconImg="about/icons8-cyber-security-100.png" title="Plan for Security improvement" description="I'm Aware that Security is a field which can be developed and operated as a different department but I'm touching some basics that are part of IT and Operations as well."
                    />
                    <AboutCard
                        iconImg="about/icons8-video-conference-100.png" title="Video Conferencing" description='Usually one of the most important perks on site are functional and modern conference rooms'
                    />

                    <AboutCard
                        iconImg="about/icons8-remote-100.png" title="Remote Work" description='Plan for remote support optimization'
                    />
                    <AboutCard
                        iconImg="about/icons8-office-100.png" title="Office Space" description='Wifi & network managed by the building services. '
                    />
                    <AboutCard
                        iconImg="about/icons8-08-onboard-58.png" title="Onboarding" description={<div>
                       <p> Plan for management</p>
                       <p>
                        MAC, Windows and iPhone Mobile Devices</p>
                        </div>}
                    />

                </ul>
            </div>

        </section>
    )
}
