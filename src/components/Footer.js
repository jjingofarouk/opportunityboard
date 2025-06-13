import styles from '../styles/globals.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Opportunity Board. All rights reserved.</p>
    </footer>
  );
}
