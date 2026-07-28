import React from 'react';

export const CurrentDateDisplay: React.FC = () => {
  const currentDate = new Date().toLocaleDateString();
  return (
    <div style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1rem' }}>
      📅 Fecha de consulta: <strong>{currentDate}</strong>
    </div>
  );
};