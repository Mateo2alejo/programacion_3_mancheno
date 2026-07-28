import React, { useMemo } from 'react';
import { Flight } from '../data/initialFlights';

interface FlightStatsProps {
  flights: Flight[];
}

export const FlightStats: React.FC<FlightStatsProps> = ({ flights }) => {
  // useMemo memoriza el cálculo del precio promedio y los conteos para evitar reprocesos innecesarios
  const stats = useMemo(() => {
    console.log('Calculando estadísticas de MM-FLY...');
    const totalFlights = flights.length;
    if (totalFlights === 0) return { totalFlights: 0, avgPrice: '0.00', delayedCount: 0 };

    const totalPrice = flights.reduce((acc, flight) => acc + flight.price, 0);
    const avgPrice = (totalPrice / totalFlights).toFixed(2);
    const delayedCount = flights.filter(f => f.status === 'Retrasado').length;

    return { totalFlights, avgPrice, delayedCount };
  }, [flights]);

  return (
    <div style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', border: '1px solid #dee2e6' }}>
      <h3>📊 Panel de Estadísticas - MM-FLY</h3>
      <p><strong>Total de Vuelos:</strong> {stats.totalFlights}</p>
      <p><strong>Precio Promedio:</strong> ${stats.avgPrice}</p>
      <p><strong>Vuelos Retrasados:</strong> {stats.delayedCount}</p>
    </div>
  );
};