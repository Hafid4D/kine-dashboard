import React from 'react';
import styles from './Header.module.css';

export default function Header({ toggleSidebar }) {
  return (
    <header className={styles.header}>
      <button className={styles.menuButton} onClick={toggleSidebar}>
        ☰
      </button>
      <h1 className={styles.title}>Cabinet Kine</h1>
    </header>
  );
}
