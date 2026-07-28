import React from 'react';
import { fruitsData } from '../data/fruitsData';

export const SimpleInfoTable: React.FC = () => {
  return (
    <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '1.5rem', overflowX: 'auto' }}>
      <h4 style={{ margin: '0 0 10px 0' }}>📋 Resumen Rápido de Inventario</h4>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
            <th style={{ padding: '8px' }}>Fruta</th>
            <th style={{ padding: '8px' }}>Precio</th>
            <th style={{ padding: '8px' }}>Stock</th>
          </tr>
        </thead>
        <tbody>
          {fruitsData.map(f => (
            <tr key={f.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '8px' }}>{f.name}</td>
              <td style={{ padding: '8px' }}>${f.price.toFixed(2)}</td>
              <td style={{ padding: '8px' }}>{f.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};