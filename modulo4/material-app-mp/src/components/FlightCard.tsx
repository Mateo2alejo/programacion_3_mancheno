import React from 'react';
import { Card, CardContent, Typography, Chip, Box, Button } from '@mui/material';
import { Flight, FlightStatus } from '../types/flight';

interface FlightCardProps {
  flight: Flight;
  onDelete: (id: string) => void;
}

const getStatusColor = (status: FlightStatus): "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning" => {
  switch (status) {
    case 'Programado': return 'info';
    case 'En Vuelo': return 'success';
    case 'Retrasado': return 'warning';
    case 'Cancelado': return 'error';
    default: return 'default';
  }
};

export const FlightCard: React.FC<FlightCardProps> = ({ flight, onDelete }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {flight.flightNumber}
          </Typography>
          <Chip label={flight.status} color={getStatusColor(flight.status)} size="small" />
        </Box>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>{flight.origin}</strong> ➔ <strong>{flight.destination}</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Salida: {flight.departureTime}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2, pt: 0, display: 'flex', justifyContent: 'flex-end' }}>
        <Button size="small" color="error" onClick={() => onDelete(flight.id)}>
          Eliminar
        </Button>
      </Box>
    </Card>
  );
};