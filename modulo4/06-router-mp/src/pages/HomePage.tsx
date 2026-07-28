import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Bienvenido al Sistema MM-FLY</h1>
      <p>Gestión avanzada de itinerarios y rutas de vuelo utilizando React Router.</p>
      <Link to="/flights" style={{ display: 'inline-block', marginTop: '1rem', padding: '10px 20px', background: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '4px' }}>
        Ver Vuelos Disponibles
      </Link>
    </div>
  );
};