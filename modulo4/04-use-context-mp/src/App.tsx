import { FlightProvider } from './context/FlightContext';
import { FlightList } from './components/FlightList';
import { BookedTickets } from './components/BookedTickets';

export function App() {
  return (
    <FlightProvider>
      <div style={{ maxWidth: '600px', margin: '30px auto', fontFamily: 'sans-serif' }}>
        <h1>MM-Fly - useContext Global</h1>
        <FlightList />
        <BookedTickets />
      </div>
    </FlightProvider>
  );
}

export default App;