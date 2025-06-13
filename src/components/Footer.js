// components/Footer.js
import styles from '../styles/Footer.module.css';
import { Github, Twitter, LinkedIn, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Opportunity Board</h3>
          <div className={styles.socials}>
            <Link href="https://github.com/jjingofarouk" aria-label="GitHub">
              <Github size={20} />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter">
              <Twitter size={20} />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn">
              <LinkedIn size={20} />
            </Link>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <nav className={styles.footerNav}>
            <Link href="/grants">Grants</Link>
            <Link href="/conferences">Conferences</Link>
            <Link href="/scholarships">Scholarships</Link>
            <Link href="/fellowships">Fellowships</Link>
          </nav>
        </div>

        <div className={styles.footerSection}>
          <h4>Resources</h4>
          <nav className={styles.footerNav}>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>Built with <Heart size={16} className={styles.heartIcon} /> in Uganda</p>
        <p>&copy; {new Date().getFullYear()} Opportunity Board</p>
      </div>
    </footer>
  );
}