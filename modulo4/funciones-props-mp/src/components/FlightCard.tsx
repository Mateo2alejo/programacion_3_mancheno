import React from 'react';
import { Flight } from '../types/flight';

interface FlightCardProps {
  flight: Flight;
  onDelete: (id: string) => void; // Función pasada por props
}

export const FlightCard: React.FC<FlightCardProps> = ({ flight, onDelete }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '8px 0', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <strong>{flight.flightNumber}</strong> ➔ {flight.destination} ({flight.status})
      </div>
      <button onClick={() => onDelete(flight.id)} style={{ color: 'red', cursor: 'pointer' }}>
        Eliminar
      </button>
    </div>
  );
};