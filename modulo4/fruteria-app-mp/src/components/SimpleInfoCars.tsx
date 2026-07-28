import React from 'react';

export const SimpleInfoCars: React.FC = () => {
  return (
    <div style={{ background: '#eff6ff', padding: '1rem', borderRadius: '8px', border: '1px solid #bfdbfe', marginBottom: '1.5rem' }}>
      <h4 style={{ margin: '0 0 5px 0', color: '#1e40af' }}>🚚 Información de Envío</h4>
      <p style={{ margin: 0, color: '#1e3a8a', fontSize: '0.9rem' }}>Envíos a domicilio gratis por compras mayores a $20.00 en todo el sector.</p>
    </div>
  );
};