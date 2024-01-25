import clients from "../Data/clients.json"
import history from "../Data/history.json"
import { getImageUrl } from '../../utils'
import styles from './Experience.module.css'

export const Experience = () => {
    return (
        <section id='experience' className={styles.container}>
            <h2 className={styles.title}>CLIENTS / EXPERIENCE</h2>
            <div className={styles.content}>
                <ul className={styles.clients}>
                    {clients.map((client) => {
                        return (
                            <li key={client.id} className={styles.client}>
                                <div className={styles.clientImageContainer}>
                                    <img src={getImageUrl(client.imageSrc)} alt={client.title} />
                                </div>
                                <p>{client.title}</p>
                            </li>
                        )
                    })}
                </ul>
                <ul className={styles.history}>
                    {history.map((historyItem, id) => {
                        return (
                            <li key={id} className={styles.historyItem}>
                                <img
                                    className={styles.historyImageContainer}
                                    src={getImageUrl(historyItem.imageSrc)}
                                    alt={`${historyItem.organisation} Logo`}
                                />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>
                                        {historyItem.experiences.map((experience, id) => {
                                            return <li key={id}>{experience}</li>;
                                        })}
                                    </ul>
                                </div>
                            </li>
                        );
                    })}
                </ul>

            </div>
        </section>
    )
}
