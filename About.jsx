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
                            <li>Experience building integrations and automations with Slack, Zendesk and Jira Servicedesk.  </li>
                            <li>SLAs and service metrics adoption.</li>
                        </ul>}
                    />
                    <AboutCard
                        iconImg="about/icons8-cyber-security-100.png" title="Information Security" description="A full Zero Trust approach on Networks, Data and Devices including SAAS platforms like OKTA and Azure"
                    />
                    <AboutCard
                        iconImg="about/icons8-video-conference-100.png" title="Video Conferencing" description='Full Expertise in designing and integrating Zoom Rooms in combination with different vendors like Logitech Swytch, Google Meets and Microsoft Teams'
                    />

                    <AboutCard
                        iconImg="about/icons8-remote-100.png" title="Remote Work" description='Full onboarding and offboarding automation process including Zero touch for Devices, Automation(account creation and deprovisioning) and vendor relationships for logistics'
                    />
                    <AboutCard
                        iconImg="about/icons8-office-100.png" title="Networks" description='Plenty of experience designing and implementing Networks solutions with Cisco, Meraki and Ubiquiti networks'
                    />
                    <AboutCard
                        iconImg="about/icons8-08-onboard-58.png" title="Business Relations" description={<div>
                       <p> Plan for operations</p>
                       <p>
                        Deep understanding of how to integrate and implement IT Operations withe the other parts of the business, including time responses and cost efficiency</p>
                        </div>}
                    />

                </ul>
            </div>

        </section>
    )
}
