import type { Dispatch, FC } from 'react';
import type { Flight, FlightAction } from '../flightReducer';

interface BookedTicketsProps {
  tickets: Flight[];
  dispatch: Dispatch<FlightAction>;
}

export const BookedTickets: FC<BookedTicketsProps> = ({ tickets, dispatch }) => {
  const totalPrice = tickets.reduce((sum, item) => sum + item.price, 0);

  return (
    <section style={{ background: '#fff9e6', padding: '15px', borderRadius: '8px', border: '1px solid #ffeba2' }}>
      <h3>🎫 Mis Boletos Reservados ({tickets.length})</h3>
      
      {tickets.length === 0 ? (
        <p style={{ color: '#856404' }}>Aún no has reservado ningún vuelo.</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {tickets.map((ticket, index) => (
              <li
                key={`${ticket.id}-${index}`}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '8px 0',
                  borderBottom: '1px solid #f0e0a8',
                }}
              >
                <span>
                  <strong>{ticket.id}</strong>: {ticket.origin} ➔ {ticket.destination} (${ticket.price})
                </span>
                <button
                  onClick={() => dispatch({ type: 'CANCEL_BOOKING', payload: ticket.id })}
                  style={{ color: '#dc3545', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  Cancelar
                </button>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '10px', textAlign: 'right', fontWeight: 'bold', fontSize: '1.1em' }}>
            Total a pagar: ${totalPrice}
          </div>
        </>
      )}
    </section>
  );
};