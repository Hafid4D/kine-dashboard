import React, { useState, useEffect } from 'react';
import PatientsList from '../components/PatientsList.jsx';
import PatientDetail from '../components/PatientDetail.jsx';
import styles from './PatientsPage.module.css';

export default function PatientsPage() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    fetch('/src/data/patients.json')
      .then(res => res.json())
      .then(data => {
        setPatients(data);
        setSelectedPatient(data[0]); // sélectionne le premier patient par défaut
      });
  }, []);

  return (
    <div className={styles.container}>
      <PatientsList patients={patients} onSelect={setSelectedPatient} selectedPatient={selectedPatient}/>
      <PatientDetail patient={selectedPatient} />
    </div>
  );
}
