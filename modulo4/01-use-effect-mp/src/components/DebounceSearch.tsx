import { useState, useEffect } from 'react';

export const DebounceSearch = () => {
    const [busqueda, setBusqueda] = useState<string>('');
    const [busquedaDebounced, setBusquedaDebounced] = useState<string>('');

    useEffect(() => {
        // setTimeout y clearTimeout del contexto global
        const timer = setTimeout(() => {
            setBusquedaDebounced(busqueda);
        }, 500);

        return () => clearTimeout(timer);
    }, [busqueda]);

    return (
        <div style={{ margin: '15px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h3>Búsqueda con Debounce (Filtro de Vuelos)</h3>
            <input
                type="text"
                placeholder="Buscar destino..."
                value={busqueda}
                onChange={(e: any) => setBusqueda(e.target.value)}
                style={{ padding: '8px', width: '250px' }}
            />
            <p>Término a consultar en servidor: <strong>{busquedaDebounced}</strong></p>
        </div>
    );
};