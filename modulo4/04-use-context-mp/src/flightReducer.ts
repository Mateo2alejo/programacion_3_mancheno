export interface Flight {
  id: string;
  origin: string;
  destination: string;
  price: number;
  availableSeats: number;
}

export interface FlightState {
  flights: Flight[];
  bookedTickets: Flight[];
}

export type FlightAction =
  | { type: 'BOOK_FLIGHT'; payload: Flight }
  | { type: 'CANCEL_BOOKING'; payload: string };

export const initialFlightState: FlightState = {
  flights: [
    { id: 'MM-101', origin: 'Quito', destination: 'Guayaquil', price: 65, availableSeats: 10 },
    { id: 'MM-202', origin: 'Quito', destination: 'Cuenca', price: 80, availableSeats: 5 },
  ],
  bookedTickets: [],
};

export function flightReducer(state: FlightState, action: FlightAction): FlightState {
  switch (action.type) {
    case 'BOOK_FLIGHT':
      return {
        ...state,
        flights: state.flights.map((f) =>
          f.id === action.payload.id ? { ...f, availableSeats: f.availableSeats - 1 } : f
        ),
        bookedTickets: [...state.bookedTickets, action.payload],
      };
    case 'CANCEL_BOOKING':
      return {
        ...state,
        flights: state.flights.map((f) =>
          f.id === action.payload ? { ...f, availableSeats: f.availableSeats + 1 } : f
        ),
        bookedTickets: state.bookedTickets.filter((f) => f.id !== action.payload),
      };
    default:
      return state;
  }
}