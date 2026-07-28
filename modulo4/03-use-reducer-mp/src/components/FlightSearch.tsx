interface FlightSearchProps {
  filter: string;
  onFilterChange: (value: string) => void;
}

export function FlightSearch({ filter, onFilterChange }: FlightSearchProps) {
  return (
    <section style={{ background: '#f4f6f8', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
      <h3>🔍 Buscar Vuelo MM-Fly</h3>
      <input
        type="text"
        placeholder="Filtrar por origen o destino (ej. Quito)..."
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
    </section>
  );
}