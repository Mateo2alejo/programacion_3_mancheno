import React from 'react';

export const WelcomeBanner: React.FC = () => {
  return (
    <div style={{ background: '#16a34a', color: '#fff', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', marginBottom: '1.5rem' }}>
      <h1>🍎 Bienvenidos a Frutería MM-FLY</h1>
      <p style={{ margin: '5px 0 0', color: '#dcfce7' }}>Sistema de gestión de inventario, precios y frescura de frutas.</p>
    </div>
  );
};