import React from 'react';
import { Link } from 'react-router-dom';
import { initialFlights } from '../data/initialFlights';

export const FlightsPage: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>📋 Listado de Vuelos MM-FLY</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {initialFlights.map(flight => (
          <li key={flight.id} style={{ background: '#f8f9fa', margin: '10px 0', padding: '15px', borderRadius: '6px', border: '1px solid #dee2e6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <strong>{flight.code}</strong> — {flight.destination} ({flight.status})
            </div>
            <Link to={`/flights/${flight.id}`} style={{ padding: '6px 12px', background: '#28a745', color: '#fff', textDecoration: 'none', borderRadius: '4px' }}>
              Ver Detalles
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};