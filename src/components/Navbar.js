import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/logo.png" alt="Opportunity Board Logo" />
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/opportunities">Opportunities</Link>
        </li>
        <li>
          <a href="https://github.com/jjingofarouk/opportunityboard" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
}
