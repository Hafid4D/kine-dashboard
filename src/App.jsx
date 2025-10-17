import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import AppointmentsCalendar from './components/AppointmentsCalendar';
import PatientsPage from './pages/PatientsPage.jsx';
import CalendarPage from './pages/CalendarPage.jsx';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      title: "Jean Dupont - Séance",
      start: new Date(2025, 9, 20, 9, 0),
      end: new Date(2025, 9, 20, 10, 0),
      kine: "Alice"
    },
    {
      id: 2,
      title: "Marie Curie - Séance",
      start: new Date(2025, 9, 21, 11, 0),
      end: new Date(2025, 9, 21, 12, 0),
      kine: "Paul"
    },
    {
      id: 3,
      title: "Ali Ben - Séance",
      start: new Date(2025, 9, 22, 14, 30),
      end: new Date(2025, 9, 22, 15, 30),
      kine: "Alice"
    }
  ]);
  return (
    <div className={styles.app}>
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className={styles.layout}>
        <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<PatientsPage />} />
            <Route path="/patients" element={<PatientsPage />} />
            <Route path="/calendrier" element={<AppointmentsCalendar appointments={appointments} />}/>
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
