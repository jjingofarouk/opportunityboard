import styles from '../styles/OpportunityCard.module.css';

export default function OpportunityCard({ title }) {
  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder}></div>
      <h2>{title}</h2>
    </div>
  );
}