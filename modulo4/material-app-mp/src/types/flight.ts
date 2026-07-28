export type FlightStatus = 'Programado' | 'En Vuelo' | 'Retrasado' | 'Cancelado';

export interface Flight {
  id: string;
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: FlightStatus;
}