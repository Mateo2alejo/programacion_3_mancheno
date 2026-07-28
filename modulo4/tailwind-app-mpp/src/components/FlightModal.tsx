import React, { useState } from 'react';
import { Flight, FlightStatus } from '../types/flight';

interface FlightModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddFlight: (flight: Flight) => void;
}

const statuses: FlightStatus[] = ['Programado', 'En Vuelo', 'Retrasado', 'Cancelado'];

export const FlightModal: React.FC<FlightModalProps> = ({ isOpen, onClose, onAddFlight }) => {
  const [flightNumber, setFlightNumber] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [status, setStatus] = useState<FlightStatus>('Programado');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!flightNumber || !origin || !destination || !departureTime) return;

    const newFlight: Flight = {
      id: Date.now().toString(),
      flightNumber,
      origin,
      destination,
      departureTime,
      status,
    };

    onAddFlight(newFlight);
    setFlightNumber('');
    setOrigin('');
    setDestination('');
    setDepartureTime('');
    setStatus('Programado');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Registrar Nuevo Vuelo (MM-Fly)</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Número de Vuelo</label>
            <input
              type="text"
              placeholder="ej: MM-901"
              value={flightNumber}
              onChange={(e) => setFlightNumber(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Origen</label>
            <input
              type="text"
              placeholder="ej: Quito (UIO)"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Destino</label>
            <input
              type="text"
              placeholder="ej: Guayaquil (GYE)"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hora de Salida</label>
            <input
              type="text"
              placeholder="ej: 09:30 AM"
              value={departureTime}
              onChange={(e) => setDepartureTime(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as FlightStatus)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {statuses.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition shadow"
            >
              Guardar Vuelo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};