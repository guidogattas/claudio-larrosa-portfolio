import React, { useContext } from 'react';
import { AboutCard } from './AboutCard';
import { getImageUrl } from '../../utils';
import styles from './About.module.css';
import { LanguageContext } from '../LanguageProvider/LanguageProvider';

export const About = () => {
    const { language } = useContext(LanguageContext);

    // Traducciones para títulos y descripciones
    const aboutContent = language === 'es'
        ? [
            {
                title: "Soporte IT",
                description: (
                    <ul>
                        <li>Experiencia construyendo integraciones y automatizaciones con Slack, Zendesk y Jira Servicedesk.</li>
                        <li>Adopción de SLA y métricas de servicio.</li>
                    </ul>
                ),
                iconImg: "about/icons8-it-100.png"
            },
            {
                title: "Seguridad de la Información",
                description: "Un enfoque de Zero Trust completo en Redes, Datos y Dispositivos, incluyendo plataformas SAAS como OKTA y Azure.",
                iconImg: "about/icons8-cyber-security-100.png"
            },
            {
                title: "Videoconferencias",
                description: 'Experiencia completa en diseño e integración de Zoom Rooms en combinación con diferentes proveedores como Logitech Swytch, Google Meets y Microsoft Teams.',
                iconImg: "about/icons8-video-conference-100.png"
            },
            {
                title: "Trabajo Remoto",
                description: 'Proceso completo de automatización de incorporación y desvinculación, incluyendo Zero touch para Dispositivos, Automatización (creación y baja de cuentas) y relaciones con proveedores para logística.',
                iconImg: "about/icons8-remote-100.png"
            },
            {
                title: "Redes",
                description: 'Amplia experiencia en diseño e implementación de soluciones de Redes con Cisco, Meraki y Ubiquiti.',
                iconImg: "about/icons8-office-100.png"
            },
            {
                title: "Relaciones Empresariales",
                description: (
                    <div>
                        <p>Planificación para operaciones y continuidad del negocio.</p>
                        <p>Tengo un profundo entendimiento de integrar e implementar Operaciones IT con otras partes del negocio, incluyendo tiempos de respuesta y eficiencia de costos.</p>
                    </div>
                ),
                iconImg: "about/icons8-08-onboard-58.png"
            }
        ]
        : [
            {
                title: "IT Support",
                description: (
                    <ul>
                        <li>Experience building integrations and automations with Slack, Zendesk and Jira Servicedesk.</li>
                        <li>SLAs and service metrics adoption.</li>
                    </ul>
                ),
                iconImg: "about/icons8-it-100.png"
            },
            {
                title: "Information Security",
                description: "A full Zero Trust approach on Networks, Data and Devices including SAAS platforms like OKTA and Azure.",
                iconImg: "about/icons8-cyber-security-100.png"
            },
            {
                title: "Video Conferencing",
                description: 'Full Expertise in designing and integrating Zoom Rooms in combination with different vendors like Logitech Swytch, Google Meets and Microsoft Teams.',
                iconImg: "about/icons8-video-conference-100.png"
            },
            {
                title: "Remote Work",
                description: 'Full onboarding and offboarding automation process including Zero touch for Devices, Automation(account creation and deprovisioning) and vendor relationships for logistics.',
                iconImg: "about/icons8-remote-100.png"
            },
            {
                title: "Networks",
                description: 'Plenty of experience designing and implementing Networks solutions with Cisco, Meraki and Ubiquiti networks.',
                iconImg: "about/icons8-office-100.png"
            },
            {
                title: "Business Relations",
                description: (
                    <div>
                        <p>Plan for business operations and continuity.</p>
                        <p>I possess a Deep understanding of integrating and implementing IT Operations with the other parts of the business, including time responses and cost efficiency.</p>
                    </div>
                ),
                iconImg: "about/icons8-08-onboard-58.png"
            }
        ];

    return (
        <section id='about' className={styles.container}>
            <h2 className={styles.title}>
                {language === 'es' ? "Así es como construyo la mejor experiencia IT" : "This is how I build the best IT Experience"}
            </h2>
            <div className={styles.content}>
                <img src={getImageUrl("img/CL.png")} alt="image of me" className={styles.aboutImage} />
                <ul className={styles.aboutItems}>
                    {aboutContent.map((item, index) => (
                        <AboutCard
                            key={index}
                            iconImg={item.iconImg}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
};
