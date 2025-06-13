import styles from '../styles/Footer.module.css';
import { Github, Twitter, Mail, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Opportunity Board</h3>
          <p>Discover global opportunities for academic and professional growth.</p>
          <div className={styles.socials}>
            <Link href="https://github.com/jjingofarouk" aria-label="GitHub">
              <Github size={20} />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter">
              <Twitter size={20} />
            </Link>
            <Link href="mailto:contact@example.com" aria-label="Email">
              <Mail size={20} />
            </Link>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <Link href="/grants">Grants</Link>
          <Link href="/conferences">Conferences</Link>
          <Link href="/scholarships">Scholarships</Link>
          <Link href="/workshops">Workshops</Link>
        </div>

        <div className={styles.footerSection}>
          <h4>Resources</h4>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>Made with <Heart size={16} /> in Uganda</p>
        <p>&copy; {currentYear} Opportunity Board</p>
      </div>
    </footer>
  );
}