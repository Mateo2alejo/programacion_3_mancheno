import { useState } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { Flight } from './types/flight';
import { Navbar } from './components/Navbar';
import { FlightCard } from './components/FlightCard';
import { FlightFormModal } from './components/FlightFormModal';

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
    <Box sx={{ flexGrow: 1, minHeight: '100vh', backgroundColor: '#f8fafc', pb: 8 }}>
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: '#0f172a' }}>
          Panel de Control de Vuelos
        </Typography>

        {flights.length === 0 ? (
          <Typography variant="body1" color="text.secondary" align="center" sx={{ mt: 8 }}>
            No hay vuelos registrados actualmente en MM-Fly.
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {flights.map((flight) => (
              <Grid item xs={12} sm={6} md={4} key={flight.id}>
                <FlightCard flight={flight} onDelete={handleDeleteFlight} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      <FlightFormModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddFlight={handleAddFlight}
      />
    </Box>
  );
}

export default App;