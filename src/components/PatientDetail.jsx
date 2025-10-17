import React, { useState } from 'react';
import styles from './PatientDetail.module.css';

export default function PatientDetail({ patient }) {
  const [activeTab, setActiveTab] = useState('dossier');

  if (!patient) return <div className={styles.detail}>Sélectionnez un patient</div>;

  return (
    <div className={styles.detail}>
      <h2>{patient.nom} {patient.prenom}</h2>

      <div className={styles.tabs}>
        <button className={activeTab==='dossier' ? styles.active : ''} onClick={()=>setActiveTab('dossier')}>Dossier</button>
        <button className={activeTab==='factures' ? styles.active : ''} onClick={()=>setActiveTab('factures')}>Factures</button>
        <button className={activeTab==='rendezvous' ? styles.active : ''} onClick={()=>setActiveTab('rendezvous')}>Rendez-vous</button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === 'dossier' && (
          <div>
            <p><strong>Pathologie :</strong> {patient.pathologie}</p>
            <p><strong>Notes :</strong> {patient.notes || 'Aucune note'}</p>
          </div>
        )}
        {activeTab === 'factures' && (
          <div>
            <p>Liste des factures à venir...</p>
          </div>
        )}
        {activeTab === 'rendezvous' && (
          <div>
            <p>Liste des rendez-vous à venir...</p>
          </div>
        )}
      </div>
    </div>
  );
}
