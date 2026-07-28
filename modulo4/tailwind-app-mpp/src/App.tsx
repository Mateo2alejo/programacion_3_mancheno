import { useState } from 'react';
import { Flight } from './types/flight';
import { Navbar } from './components/Navbar';
import { FlightCard } from './components/FlightCard';
import { FlightModal } from './components/FlightModal';

function App() {
  const [flights, setFlights] = useState<Flight[]>([
    { id: '1', flightNumber: 'MM-101', origin: 'Quito (UIO)', destination: 'Miami (MIA)', departureTime: '08:30 AM', status: 'Programado' },
    { id: '2', flightNumber: 'MM-204', origin: 'Guayaquil (GYE)', destination: 'Bogotá (BOG)', departureTime: '11:15 AM', status: 'En Vuelo' },
    { id: '3', flightNumber: 'MM-305', origin: 'Quito (UIO)', destination: 'Madrid (MAD)', departureTime: '06:00 PM', status: 'Retrasado' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddFlight = (newFlight: Flight) => {
    setFlights([newFlight, ...flights]);
  };

  const handleDeleteFlight = (id: string) => {
    setFlights(flights.filter((f) => f.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      
      <main className="max-w-7xl mx-auto px-4 mt-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Panel de Control de Vuelos</h1>

        {flights.length === 0 ? (
          <p className="text-center text-gray-500 mt-16 text-lg">No hay vuelos registrados actualmente en MM-Fly.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {flights.map((flight) => (
              <FlightCard key={flight.id} flight={flight} onDelete={handleDeleteFlight} />
            ))}
          </div>
        )}
      </main>

      <FlightModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddFlight={handleAddFlight}
      />
    </div>
  );
}

export default App;