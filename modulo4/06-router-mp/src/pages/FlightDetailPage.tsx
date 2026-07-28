import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { initialFlights } from '../data/initialFlights';

export const FlightDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const flight = initialFlights.find(f => f.id === id);

  if (!flight) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h3>❌ Vuelo no encontrado</h3>
        <button onClick={() => navigate('/flights')} style={{ marginTop: '1rem', padding: '8px 16px' }}>
          Volver a la lista
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h2>Detalles del Vuelo: {flight.code}</h2>
      <div style={{ background: '#f1f3f5', padding: '1.5rem', borderRadius: '8px', lineHeight: '1.8' }}>
        <p><strong>Destino:</strong> {flight.destination}</p>
        <p><strong>Aerolínea:</strong> {flight.airline}</p>
        <p><strong>Precio:</strong> ${flight.price}</p>
        <p><strong>Duración:</strong> {flight.durationMinutes} minutos</p>
        <p><strong>Estado:</strong> {flight.status}</p>
      </div>
      <br />
      <Link to="/flights" style={{ color: '#007bff', textDecoration: 'none' }}>← Volver a vuelos</Link>
    </div>
  );
};