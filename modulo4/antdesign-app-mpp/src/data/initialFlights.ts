export interface Flight {
  id: string;
  code: string;
  destination: string;
  price: number;
  durationMinutes: number;
  status: 'Programado' | 'Retrasado' | 'Cancelado';
  airline: string;
  maxLuggage: number;
  registeredPassengers: number;
}

export const initialFlights: Flight[] = [
  { id: '1', code: 'MM-FLY-101', destination: 'Quito (UIO)', price: 120, durationMinutes: 45, status: 'Programado', airline: 'AeroMM', maxLuggage: 150, registeredPassengers: 120 },
  { id: '2', code: 'MM-FLY-102', destination: 'Guayaquil (GYE)', price: 95, durationMinutes: 55, status: 'Programado', airline: 'AeroMM', maxLuggage: 100, registeredPassengers: 85 },
  { id: '3', code: 'MM-FLY-103', destination: 'Galápagos (GPS)', price: 350, durationMinutes: 120, status: 'Retrasado', airline: 'IslandAir', maxLuggage: 200, registeredPassengers: 190 },
  { id: '4', code: 'MM-FLY-104', destination: 'Cuenca (CUE)', price: 110, durationMinutes: 50, status: 'Programado', airline: 'AeroMM', maxLuggage: 120, registeredPassengers: 95 },
  { id: '5', code: 'MM-FLY-105', destination: 'Miami (MIA)', price: 650, durationMinutes: 240, status: 'Programado', airline: 'GlobalWings', maxLuggage: 300, registeredPassengers: 250 },
  { id: '6', code: 'MM-FLY-106', destination: 'Bogotá (BOG)', price: 280, durationMinutes: 90, status: 'Cancelado', airline: 'AndeanJet', maxLuggage: 180, registeredPassengers: 0 },
];