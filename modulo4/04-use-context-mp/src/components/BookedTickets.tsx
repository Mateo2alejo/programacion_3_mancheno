import { useFlight } from '../context/FlightContext';

export function BookedTickets() {
  const { state, dispatch } = useFlight();

  return (
    <div style={{ marginTop: '20px', background: '#f9f9f9', padding: '10px' }}>
      <h3>🎫 Mis Reservas</h3>
      {state.bookedTickets.length === 0 ? (
        <p>No hay reservas aún.</p>
      ) : (
        state.bookedTickets.map((ticket, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span>{ticket.origin} ➔ {ticket.destination}</span>
            <button onClick={() => dispatch({ type: 'CANCEL_BOOKING', payload: ticket.id })}>
              Cancelar
            </button>
          </div>
        ))
      )}
    </div>
  );
}