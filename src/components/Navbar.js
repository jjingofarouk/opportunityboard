import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { 
  Menu, 
  X, 
  Award, 
  Trophy, 
  Users, 
  BookOpen,
  GraduationCap,
  Briefcase,
  Home
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Grants', href: '/grants', icon: Award },
    { name: 'Competitions', href: '/competitions', icon: Trophy },
    { name: 'Conferences', href: '/conferences', icon: Users },
    { name: 'Scholarships', href: '/scholarships', icon: GraduationCap },
    { name: 'Workshops', href: '/workshops', icon: BookOpen },
    { name: 'Jobs', href: '/jobs', icon: Briefcase },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'unset' : 'hidden';
  };

  return (
    <nav className={`${styles.navbar} ${!visible ? styles.hidden : ''}`}>
      <div className={styles.navbarContent}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/logo.png" alt="Opportunity Board Logo" />
          </Link>
        </div>

        <div className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={styles.navLink}
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}