import React from 'react';
import { initialFlights } from './data/initialFlights';
import { FlightCard } from './components/FlightCard';

export function App() {
  return (
    <div style={{ width: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8fafc' }}>
      {/* Barra de navegación superior */}
      <nav style={{ background: '#1e293b', padding: '1rem 2rem', color: '#fff', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '1.5rem' }}>✈️ MM-FLY Styles Dashboard</h2>
        <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Módulo 07 - Estilos y CSS Modules</span>
      </nav>

      {/* Contenido principal a pantalla completa */}
      <main style={{ flex: 1, padding: '2rem', width: '100%' }}>
        <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', color: '#1e293b', marginBottom: '0.5rem' }}>Panel de Vuelos Disponibles</h1>
          <p style={{ color: '#64748b', fontSize: '1.05rem' }}>Gestión visual de itinerarios aplicando estilos personalizados y tarjetas adaptativas.</p>
        </header>

        {/* Cuadrícula adaptable para ocupar todo el ancho */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '1.5rem', 
          width: '100%' 
        }}>
          {initialFlights.map(flight => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;