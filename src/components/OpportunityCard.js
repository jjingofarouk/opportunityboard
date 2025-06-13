import styles from '../styles/OpportunityCard.module.css';

export default function OpportunityCard({ title, description, link }) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Learn More
      </a>
    </div>
  );
}
