import React from 'react';
import { Flight } from '../data/initialFlights';

interface FlightListProps {
  flights: Flight[];
}

export const FlightList: React.FC<FlightListProps> = ({ flights }) => {
  if (flights.length === 0) {
    return <p style={{ textAlign: 'center', color: '#64748b' }}>No se encontraron vuelos disponibles.</p>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {flights.map(flight => (
        <div key={flight.id} style={{ background: '#fff', padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <strong>{flight.code}</strong> → {flight.destination} ({flight.airline})
          </div>
          <span style={{ 
            padding: '4px 10px', 
            borderRadius: '4px', 
            fontSize: '0.85rem',
            background: flight.status === 'Programado' ? '#dcfce7' : flight.status === 'Retrasado' ? '#fef9c3' : '#fee2e2',
            color: flight.status === 'Programado' ? '#166534' : flight.status === 'Retrasado' ? '#854d0e' : '#991b1b'
          }}>
            {flight.status}
          </span>
        </div>
      ))}
    </div>
  );
};