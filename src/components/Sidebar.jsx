import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <NavLink to="/patients" className={({ isActive }) => isActive ? styles.active : ''}>
        👥 Patients
      </NavLink>
      <NavLink to="/calendrier" className={({ isActive }) => isActive ? styles.active : ''}>
        📅 Rendez-vous
      </NavLink>
    </aside>
  )
}
