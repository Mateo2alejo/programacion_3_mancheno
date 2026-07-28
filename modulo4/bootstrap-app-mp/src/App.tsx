import React, { useState } from 'react';
import { initialFlights } from './data/initialFlights';
import { CronometroEmbarque } from './components/CronometroEmbarque';
import { NotificacionesVuelo } from './components/NotificacionesVuelo';
import { AudioAnuncios } from './components/AudioAnuncios';

export function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const activeFlight = initialFlights[0];

  const filteredFlights = initialFlights.filter(f => 
    f.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid min-vh-100 p-0 d-flex flex-column bg-light">
      <nav className="navbar navbar-dark bg-dark px-4 shadow-sm">
        <span className="navbar-brand mb-0 h1">✈️ MM-FLY — Sistema Completo Bootstrap</span>
      </nav>

      <main className="flex-grow-1 p-4 w-100">
        <div className="row g-4">
          {/* Columna Izquierda: Controles y Alertas */}
          <div className="col-lg-4">
            <CronometroEmbarque flightCode={activeFlight.code} />
            <AudioAnuncios flightCode={activeFlight.code} />
            <NotificacionesVuelo />
          </div>

          {/* Columna Derecha: Búsqueda y Tabla de Vuelos */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm p-4 w-100">
              <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="🔍 Buscar vuelo..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>Código</th>
                      <th>Destino</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredFlights.map(flight => (
                      <tr key={flight.id}>
                        <td className="fw-bold">{flight.code}</td>
                        <td>{flight.destination}</td>
                        <td>
                          <span className={`badge ${flight.status === 'Programado' ? 'bg-success' : 'bg-warning text-dark'}`}>
                            {flight.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;