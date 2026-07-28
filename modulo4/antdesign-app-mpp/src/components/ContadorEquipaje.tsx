import React, { useState } from 'react';
import { Flight } from '../data/initialFlights';

interface ContadorEquipajeProps {
  selectedFlight: Flight;
}

export const ContadorEquipaje: React.FC<ContadorEquipajeProps> = ({ selectedFlight }) => {
  const [luggageCount, setLuggageCount] = useState(selectedFlight.registeredPassengers);

  const handleAddLuggage = () => {
    if (luggageCount < selectedFlight.maxLuggage) {
      setLuggageCount(prev => prev + 1);
    }
  };

  const handleRemoveLuggage = () => {
    if (luggageCount > 0) {
      setLuggageCount(prev => prev - 1);
    }
  };

  return (
    <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '1.5rem' }}>
      <h3>🧳 Control de Equipaje - {selectedFlight.code}</h3>
      <p style={{ color: '#64748b', fontSize: '0.95rem', margin: '5px 0 15px 0' }}>
        Destino: {selectedFlight.destination} | Capacidad máxima: {selectedFlight.maxLuggage} maletas
      </p>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          Maletas Registradas: <span style={{ color: '#0284c7' }}>{luggageCount}</span>
        </span>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={handleRemoveLuggage}
            style={{ padding: '6px 12px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            - Quitar
          </button>
          <button 
            onClick={handleAddLuggage}
            style={{ padding: '6px 12px', background: '#22c55e', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            + Registrar Maleta
          </button>
        </div>
      </div>
    </div>
  );
};