import React, { useState } from 'react';

interface GestionPasajerosProps {
  flightCode: string;
}

export const GestionPasajeros: React.FC<GestionPasajerosProps> = ({ flightCode }) => {
  const [passengers, setPassengers] = useState<string[]>(['Mateo Mancheno', 'Ana Gómez', 'Carlos Pérez']);
  const [newPassenger, setNewPassenger] = useState('');

  const handleAddPassenger = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassenger.trim() === '') return;
    setPassengers([...passengers, newPassenger.trim()]);
    setNewPassenger('');
  };

  return (
    <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
      <h3>👥 Gestión de Pasajeros ({flightCode})</h3>
      
      <form onSubmit={handleAddPassenger} style={{ display: 'flex', gap: '10px', margin: '15px 0' }}>
        <input 
          type="text" 
          placeholder="Nombre del nuevo pasajero..."
          value={newPassenger}
          onChange={(e) => setNewPassenger(e.target.value)}
          style={{ flex: 1, padding: '8px 12px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
        />
        <button 
          type="submit"
          style={{ padding: '8px 16px', background: '#0284c7', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Agregar Pasajero
        </button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {passengers.map((passenger, index) => (
          <li key={index} style={{ padding: '8px 12px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between' }}>
            <span>👤 {passenger}</span>
            <span style={{ color: '#64748b', fontSize: '0.85rem' }}>Asiento asignado</span>
          </li>
        ))}
      </ul>
    </div>
  );
};