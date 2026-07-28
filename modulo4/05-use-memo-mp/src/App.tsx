import React, { useState } from 'react';
import { initialFlights, Flight } from './data/initialFlights';
import { FlightStats } from './components/FlightStats';
import { FlightList } from './components/FlightList';

export function App() {
  const [flights] = useState<Flight[]>(initialFlights);
  const [counter, setCounter] = useState<number>(0);

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', fontFamily: 'Arial, sans-serif', padding: '0 1rem' }}>
      <h2>✈️ Sistema de Gestión de Vuelos - MM-FLY</h2>
      <p>Proyecto desarrollado para demostrar el rendimiento y optimización con el hook <code>useMemo</code>.</p>
      
      <div style={{ margin: '1rem 0', background: '#e9ecef', padding: '10px', borderRadius: '5px' }}>
        <button onClick={() => setCounter(counter + 1)} style={{ padding: '6px 12px', cursor: 'pointer' }}>
          Render extra (Contador: {counter})
        </button>
        <span style={{ marginLeft: '10px', fontSize: '0.9rem', color: '#495057' }}>
          Haz clic para comprobar que los cálculos pesados no se ejecutan en re-renderizados innecesarios.
        </span>
      </div>

      <FlightStats flights={flights} />
      <FlightList flights={flights} />
    </div>
  );
}

export default App;