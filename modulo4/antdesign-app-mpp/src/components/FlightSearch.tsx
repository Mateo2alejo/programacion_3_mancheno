import React from 'react';

interface FlightSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const FlightSearch: React.FC<FlightSearchProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <input 
        type="text" 
        placeholder="🔍 Buscar vuelo por código o destino..." 
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ width: '100%', padding: '10px 15px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem' }}
      />
    </div>
  );
};