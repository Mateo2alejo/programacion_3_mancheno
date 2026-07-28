import { useState } from 'react';
import { Flight } from './types/flight';
import { FlightForm } from './components/FlightForm';
import { FlightCard } from './components/FlightCard';

function App() {
  const [flights, setFlights] = useState<Flight[]>([
    { id: '1', flightNumber: 'MM-101', destination: 'Miami (MIA)', status: 'Programado' },
    { id: '2', flightNumber: 'MM-204', destination: 'Bogotá (BOG)', status: 'En Vuelo' },
  ]);

  const handleAddFlight = (newFlight: Flight) => {
    setFlights([newFlight, ...flights]);
  };

  const handleDeleteFlight = (id: string) => {
    setFlights(flights.filter((f) => f.id !== id));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Sistema MM-Fly - Demostración de Funciones y Props</h2>
      
      <FlightForm onAddFlight={handleAddFlight} />

      <h3>Lista de Vuelos</h3>
      {flights.map((flight) => (
        <FlightCard 
          key={flight.id} 
          flight={flight} 
          onDelete={handleDeleteFlight} 
        />
      ))}
    </div>
  );
}

export default App;