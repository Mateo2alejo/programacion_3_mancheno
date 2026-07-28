import React, { useState, useMemo } from 'react';
import { Flight } from '../data/initialFlights';

interface FlightListProps {
  flights: Flight[];
}

export const FlightList: React.FC<FlightListProps> = ({ flights }) => {
  const [searchFilter, setSearchFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('Todos');

  // useMemo optimiza el filtrado para que la lista solo se recalcule cuando cambie la búsqueda o el estado
  const filteredFlights = useMemo(() => {
    console.log('Filtrando vuelos de MM-FLY...');
    return flights.filter(flight => {
      const matchesSearch = 
        flight.code.toLowerCase().includes(searchFilter.toLowerCase()) ||
        flight.destination.toLowerCase().includes(searchFilter.toLowerCase());
      
      const matchesStatus = statusFilter === 'Todos' || flight.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [flights, searchFilter, statusFilter]);

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Buscar por código o destino..."
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
          style={{ padding: '8px', flex: 1, borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <select 
          value={statusFilter} 
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          <option value="Todos">Todos los estados</option>
          <option value="Programado">Programado</option>
          <option value="Retrasado">Retrasado</option>
          <option value="Cancelado">Cancelado</option>
        </select>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <thead>
          <tr style={{ background: '#343a40', color: '#fff', textAlign: 'left' }}>
            <th style={{ padding: '10px' }}>Código</th>
            <th style={{ padding: '10px' }}>Destino</th>
            <th style={{ padding: '10px' }}>Precio</th>
            <th style={{ padding: '10px' }}>Duración</th>
            <th style={{ padding: '10px' }}>Estado</th>
          </tr>
        </thead>
        <tbody>
          {filteredFlights.length > 0 ? (
            filteredFlights.map(flight => (
              <tr key={flight.id} style={{ borderBottom: '1px solid #dee2e6' }}>
                <td style={{ padding: '10px' }}>{flight.code}</td>
                <td style={{ padding: '10px' }}>{flight.destination}</td>
                <td style={{ padding: '10px' }}>${flight.price}</td>
                <td style={{ padding: '10px' }}>{flight.durationMinutes} min</td>
                <td style={{ padding: '10px' }}>{flight.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} style={{ padding: '20px', textAlign: 'center', color: '#6c757d' }}>
                No se encontraron vuelos en MM-FLY.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};