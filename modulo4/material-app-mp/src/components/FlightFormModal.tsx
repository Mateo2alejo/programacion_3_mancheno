import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, MenuItem } from '@mui/material';
import { Flight, FlightStatus } from '../types/flight';

interface FlightFormModalProps {
  open: boolean;
  onClose: () => void;
  onAddFlight: (flight: Flight) => void;
}

const statuses: FlightStatus[] = ['Programado', 'En Vuelo', 'Retrasado', 'Cancelado'];

export const FlightFormModal: React.FC<FlightFormModalProps> = ({ open, onClose, onAddFlight }) => {
  const [flightNumber, setFlightNumber] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [status, setStatus] = useState<FlightStatus>('Programado');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!flightNumber || !origin || !destination || !departureTime) return;

    const newFlight: Flight = {
      id: Date.now().toString(),
      flightNumber,
      origin,
      destination,
      departureTime,
      status,
    };

    onAddFlight(newFlight);
    setFlightNumber('');
    setOrigin('');
    setDestination('');
    setDepartureTime('');
    setStatus('Programado');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Registrar Nuevo Vuelo - MM-Fly</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
          <TextField
            label="Número de Vuelo (ej: MM-300)"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Origen (Ciudad / Aeropuerto)"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Destino (Ciudad / Aeropuerto)"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Hora de Salida (ej: 04:00 PM)"
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
            required
            fullWidth
          />
          <TextField
            select
            label="Estado del Vuelo"
            value={status}
            onChange={(e) => setStatus(e.target.value as FlightStatus)}
            fullWidth
          >
            {statuses.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={onClose} color="inherit">Cancelar</Button>
          <Button type="submit" variant="contained" sx={{ backgroundColor: '#1e1b4b' }}>
            Guardar Vuelo
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};