import React from 'react';
import styles from './Sidebar.module.css';
import logo from '../assets/logo.png'; // ton logo ici

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo Cabinet" className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        <a href="/">Patients</a>
        <a href="/calendrier">Calendrier</a>
        {/* autres liens */}
      </nav>
    </aside>
  );
}
