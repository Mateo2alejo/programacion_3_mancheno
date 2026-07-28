import { useRef } from 'react';

export const FocusCodigoVuelo = () => {
    // Usamos 'any' para evitar roces con los tipos del DOM en TypeScript
    const inputCodigoRef = useRef<any>(null);

    const handleFocus = () => {
        inputCodigoRef.current?.focus();
    };

    return (
        <div style={{ margin: '15px 0', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h3>1. Búsqueda Rápida de Vuelo (Enfoque Directo)</h3>
            <label htmlFor="inputVuelo">Código de Vuelo: </label>
            <input
                ref={inputCodigoRef}
                id="inputVuelo"
                type="text"
                placeholder="Ej. MM-204"
                style={{ padding: '8px', marginRight: '10px', width: '200px' }}
            />
            <button onClick={handleFocus} style={{ padding: '8px 12px', cursor: 'pointer' }}>
                🎯 Enfocar Entrada
            </button>
        </div>
    );
};