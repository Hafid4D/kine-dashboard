import React, { useState } from 'react';
import styles from './CalendarPage.module.css';

export default function CalendarPage() {
  const [appointments] = useState([
    { id: 1, patient: "Jean Dupont", date: "2025-10-18", heure: "10:00" },
    { id: 2, patient: "Marie Curie", date: "2025-10-18", heure: "14:00" },
    { id: 3, patient: "Ali Ben", date: "2025-10-19", heure: "09:00" }
  ]);

  return (
    <div className={styles.calendar}>
      <h2>Calendrier des Rendez-vous</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Heure</th>
            <th>Patient</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(a => (
            <tr key={a.id}>
              <td>{a.date}</td>
              <td>{a.heure}</td>
              <td>{a.patient}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
