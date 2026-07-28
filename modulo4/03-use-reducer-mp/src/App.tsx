import { useReducer, useState } from 'react'
import './App.css'
import { flightReducer, initialFlightState } from './flightReducer'
import { FlightSearch } from './components/FlightSearch'
import { FlightList } from './components/FlightList'
import { BookedTickets } from './components/BookedTickets'

function App() {
  const [state, dispatch] = useReducer(flightReducer, initialFlightState)
  const [filter, setFilter] = useState('')

  const filteredFlights = state.flights.filter(
    (f) =>
      f.origin.toLowerCase().includes(filter.toLowerCase()) ||
      f.destination.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div style={{ maxWidth: '800px', margin: '30px auto', fontFamily: 'Arial, sans-serif', padding: '0 20px' }}>
      <header style={{ borderBottom: '2px solid #0056b3', paddingBottom: '10px', marginBottom: '20px' }}>
        <h1 style={{ color: '#0056b3', margin: 0 }}>✈️ MM-Fly</h1>
        <p style={{ color: '#666', margin: '5px 0 0' }}>Sistema Integrado de Gestión de Vuelos</p>
      </header>

      <FlightSearch filter={filter} onFilterChange={setFilter} />

      <FlightList flights={filteredFlights} dispatch={dispatch} />

      <BookedTickets tickets={state.bookedTickets} dispatch={dispatch} />
    </div>
  )
}

export default App
