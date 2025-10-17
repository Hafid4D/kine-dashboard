import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './PatientsList.module.css';

Modal.setAppElement('#root'); // obligatoire pour accessibilité

export default function PatientsList({ patients, setPatients, onSelect, selectedPatient }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [newPatient, setNewPatient] = useState({ firstName: '', lastName: '', birthDate: '' });

  const filteredPatients = patients.filter(p =>
    (p.nom || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (p.prenom || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddPatient = () => setModalOpen(true);

  const handleDeletePatient = () => {
    if (!selectedPatient) {
      alert("Sélectionnez un patient à supprimer");
      return;
    }
    setPatients(prev => prev.filter(p => p.id !== selectedPatient.id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = patients.length ? Math.max(...patients.map(p => p.id)) + 1 : 1;
    const patient = {
      id: newId,
      nom: newPatient.lastName,
      prenom: newPatient.firstName,
      birthDate: newPatient.birthDate
    };
    setPatients([...patients, patient]);
    setNewPatient({ firstName: '', lastName: '', birthDate: '' });
    setModalOpen(false);
  };

  return (
    <div className={styles.list}>
      <h2>Liste des Patients</h2>

      <input
        type="text"
        placeholder="Rechercher..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className={styles.search}
      />

      <ul className={styles.scrollList}>
        {filteredPatients.map(p => (
          <li
            key={p.id}
            className={selectedPatient?.id === p.id ? styles.selected : ''}
            onClick={() => onSelect(p)}
          >
            {p.prenom} {p.nom} {p.birthDate ? `(${p.birthDate})` : ''}
          </li>
        ))}
      </ul>

      <div className={styles.buttonGroup}>
        <button className={styles.addButton} onClick={handleAddPatient}>
          Ajouter
        </button>
        <button className={styles.deleteButton} onClick={handleDeletePatient}>
          Supprimer
        </button>
      </div>

      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Ajouter Patient"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <h2>Ajouter un Patient</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Prénom"
            value={newPatient.firstName}
            onChange={e => setNewPatient({ ...newPatient, firstName: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Nom"
            value={newPatient.lastName}
            onChange={e => setNewPatient({ ...newPatient, lastName: e.target.value })}
            required
          />
          <input
            type="date"
            placeholder="Date de naissance"
            value={newPatient.birthDate}
            onChange={e => setNewPatient({ ...newPatient, birthDate: e.target.value })}
            required
          />
          <div className={styles.formButtons}>
            <button type="submit">Ajouter</button>
            <button type="button" onClick={() => setModalOpen(false)}>Annuler</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
