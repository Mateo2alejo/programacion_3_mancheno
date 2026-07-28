import React from 'react';
import { Flight } from '../data/initialFlights';
import styles from './FlightCard.module.css';

interface FlightCardProps {
  flight: Flight;
}

export const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Programado': return styles.statusProgramado;
      case 'Retrasado': return styles.statusRetrasado;
      case 'Cancelado': return styles.statusCancelado;
      default: return '';
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.code}>{flight.code}</span>
        <span className={`${styles.status} ${getStatusClass(flight.status)}`}>
          {flight.status}
        </span>
      </div>
      <div className={styles.body}>
        <p><strong>Destino:</strong> {flight.destination}</p>
        <p><strong>Aerolínea:</strong> {flight.airline}</p>
        <p><strong>Precio:</strong> ${flight.price}</p>
        <p><strong>Duración:</strong> {flight.durationMinutes} min</p>
      </div>
    </div>
  );
};