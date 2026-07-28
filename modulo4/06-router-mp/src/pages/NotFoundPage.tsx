import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div style={{ padding: '3rem', textAlign: 'center' }}>
      <h1>404</h1>
      <p>Página no encontrada en el sistema MM-FLY.</p>
      <Link to="/" style={{ color: '#007bff' }}>Regresar al inicio</Link>
    </div>
  );
};