import type { Dispatch } from 'react';
import { Flight, FlightAction } from '../flightReducer';

interface FlightListProps {
  flights: Flight[];
  dispatch: Dispatch<FlightAction>;
}

export function FlightList({ flights, dispatch }: FlightListProps) {
  return (
    <section style={{ marginBottom: '30px' }}>
      <h3>🛫 Vuelos Disponibles</h3>
      <div style={{ display: 'grid', gap: '10px' }}>
        {flights.map((flight) => (
          <div
            key={flight.id}
            style={{
              border: '1px solid #ddd',
              padding: '15px',
              borderRadius: '6px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: '#fff',
            }}
          >
            <div>
              <strong>[{flight.id}]</strong> {flight.origin} ➔ {flight.destination}
              <div style={{ fontSize: '0.85em', color: '#555', marginTop: '4px' }}>
                Fecha: {flight.date} | Asientos: <strong>{flight.availableSeats}</strong>
              </div>
            </div>

            <div>
              <span style={{ fontWeight: 'bold', fontSize: '1.1em', marginRight: '15px' }}>
                ${flight.price}
              </span>
              <button
                disabled={flight.availableSeats === 0}
                onClick={() => dispatch({ type: 'BOOK_FLIGHT', payload: flight })}
                style={{
                  backgroundColor: flight.availableSeats > 0 ? '#28a745' : '#6c757d',
                  color: '#fff',
                  border: 'none',
                  padding: '8px 14px',
                  borderRadius: '4px',
                  cursor: flight.availableSeats > 0 ? 'pointer' : 'not-allowed',
                }}
              >
                {flight.availableSeats > 0 ? 'Reservar' : 'Agotado'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}