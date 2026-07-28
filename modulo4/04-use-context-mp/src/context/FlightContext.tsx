import { createContext, useContext, useReducer, ReactNode } from 'react';
import { flightReducer, initialFlightState, FlightState, FlightAction } from '../flightReducer';

interface FlightContextProps {
  state: FlightState;
  dispatch: React.Dispatch<FlightAction>;
}

const FlightContext = createContext<FlightContextProps | undefined>(undefined);

export function FlightProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(flightReducer, initialFlightState);

  return (
    <FlightContext.Provider value={{ state, dispatch }}>
      {children}
    </FlightContext.Provider>
  );
}

export function useFlight() {
  const context = useContext(FlightContext);
  if (!context) throw new Error('useFlight debe usarse dentro de un FlightProvider');
  return context;
}