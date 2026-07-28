import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { initialFlights } from './data/initialFlights';
const Navbar = () => (
  <nav style={{ background: '#1e293b', padding: '1rem 2rem', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
    <h3 style={{ margin: 0 }}>✈️ MM-FLY Control Panel</h3>
    <div style={{ display: 'flex', gap: '30px' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Inicio</Link>
      <Link to="/flights" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Gestión de Vuelos</Link>
    </div>
  </nav>
);

const HomePage = () => (
  <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Bienvenido al Sistema MM-FLY</h1>
    <p style={{ fontSize: '1.2rem', color: '#64748b' }}>Plataforma integral de gestión de rutas y estado de vuelos a pantalla completa.</p>
    <br />
    <Link to="/flights" style={{ padding: '12px 24px', background: '#0284c7', color: '#fff', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold' }}>
      Ir al listado de vuelos
    </Link>
  </div>
);

const FlightsPage = () => (
  <div style={{ padding: '2rem' }}>
    <h2>📋 Listado General de Vuelos</h2>
    <div style={{ marginTop: '1.5rem', background: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#475569' }}>
            <th style={{ padding: '12px' }}>Código</th>
            <th style={{ padding: '12px' }}>Destino</th>
            <th style={{ padding: '12px' }}>Aerolínea</th>
            <th style={{ padding: '12px' }}>Precio</th>
            <th style={{ padding: '12px' }}>Estado</th>
          </tr>
        </thead>
        <tbody>
          {initialFlights.map(flight => (
            <tr key={flight.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '12px', fontWeight: 'bold' }}>{flight.code}</td>
              <td style={{ padding: '12px' }}>{flight.destination}</td>
              <td style={{ padding: '12px' }}>{flight.airline}</td>
              <td style={{ padding: '12px' }}>${flight.price}</td>
              <td style={{ padding: '12px' }}>
                <span style={{ 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  fontSize: '0.85rem',
                  background: flight.status === 'Programado' ? '#dcfce7' : flight.status === 'Retrasado' ? '#fef9c3' : '#fee2e2',
                  color: flight.status === 'Programado' ? '#166534' : flight.status === 'Retrasado' ? '#854d0e' : '#991b1b'
                }}>
                  {flight.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export function App() {
  return (
    <BrowserRouter>
      <div style={{ width: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
        <Navbar />
        <div style={{ flex: 1, width: '100%' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/flights" element={<FlightsPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;