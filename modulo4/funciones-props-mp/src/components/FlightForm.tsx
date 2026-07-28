import React, { useState } from 'react';
import { Flight } from '../types/flight';

interface FlightFormProps {
  onAddFlight: (flight: Flight) => void;
}

export const FlightForm: React.FC<FlightFormProps> = ({ onAddFlight }) => {
  const [flightNumber, setFlightNumber] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!flightNumber || !destination) return;

    const newFlight: Flight = {
      id: Date.now().toString(),
      flightNumber,
      destination,
      status: 'Programado',
    };

    onAddFlight(newFlight); // Ejecutando la función pasada por props
    setFlightNumber('');
    setDestination('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Registrar Vuelo (Ejemplo de Props y Funciones)</h3>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Número de Vuelo (ej: MM-700)"
          value={flightNumber}
          onChange={(e) => setFlightNumber(e.target.value)}
          required
          style={{ marginRight: '10px', padding: '6px' }}
        />
        <input
          type="text"
          placeholder="Destino"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
          style={{ marginRight: '10px', padding: '6px' }}
        />
        <button type="submit" style={{ padding: '6px 12px' }}>Agregar</button>
      </div>
    </form>
  );
};