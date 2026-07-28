import { useFlight } from '../context/FlightContext';

export function FlightList() {
  const { state, dispatch } = useFlight();

  return (
    <div>
      <h3>✈️ Vuelos Disponibles (MM-Fly)</h3>
      {state.flights.map((flight) => (
        <div key={flight.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '8px' }}>
          <strong>{flight.origin} ➔ {flight.destination}</strong> (${flight.price}) | Asientos: {flight.availableSeats}
          <button
            disabled={flight.availableSeats === 0}
            onClick={() => dispatch({ type: 'BOOK_FLIGHT', payload: flight })}
            style={{ marginLeft: '10px' }}
          >
            Reservar
          </button>
        </div>
      ))}
    </div>
  );
}