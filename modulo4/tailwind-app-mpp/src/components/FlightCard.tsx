import React from 'react';
import { Flight, FlightStatus } from '../types/flight';

interface FlightCardProps {
  flight: Flight;
  onDelete: (id: string) => void;
}

const getStatusBadge = (status: FlightStatus) => {
  switch (status) {
    case 'Programado':
      return 'bg-blue-100 text-blue-800';
    case 'En Vuelo':
      return 'bg-green-100 text-green-800';
    case 'Retrasado':
      return 'bg-amber-100 text-amber-800';
    case 'Cancelado':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const FlightCard: React.FC<FlightCardProps> = ({ flight, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between border border-gray-100 hover:shadow-lg transition duration-200">
      <div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-lg font-bold text-gray-800">{flight.flightNumber}</span>
          <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${getStatusBadge(flight.status)}`}>
            {flight.status}
          </span>
        </div>
        <div className="text-gray-600 mb-2 font-medium">
          {flight.origin} <span className="text-indigo-500 font-bold mx-1">➔</span> {flight.destination}
        </div>
        <div className="text-sm text-gray-400">
          Salida: <span className="text-gray-600 font-medium">{flight.departureTime}</span>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-gray-100 flex justify-end">
        <button
          onClick={() => onDelete(flight.id)}
          className="text-sm text-red-500 hover:text-red-700 font-medium transition duration-150"
        >
          Eliminar Vuelo
        </button>
      </div>
    </div>
  );
};