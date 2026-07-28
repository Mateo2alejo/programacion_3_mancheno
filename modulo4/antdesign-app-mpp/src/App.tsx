import React, { useState } from 'react';
import { initialFlights } from './data/initialFlights';
import { FlightSearch } from './components/FlightSearch';
import { EstadoTorreControl } from './components/EstadoTorreControl';
import { ContadorEquipaje } from './components/ContadorEquipaje';
import { GestionPasajeros } from './components/GestionPasajeros';

export function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const selectedFlight = initialFlights[0]; // Vuelo activo por defecto para demostración

  const filteredFlights = initialFlights.filter(f => 
    f.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ width: '100vw', minHeight: '100vh', backgroundColor: '#f8fafc', padding: '2rem' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1>✈️ Sistema Modular MM-FLY Completo</h1>
        <p style={{ color: '#64748b' }}>Gestión avanzada de torre de control, equipaje y pasajeros.</p>
      </header>

      <main style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <EstadoTorreControl />
        <FlightSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <ContadorEquipaje selectedFlight={selectedFlight} />
        <GestionPasajeros flightCode={selectedFlight.code} />
      </main>
    </div>
  );
}

export default App;