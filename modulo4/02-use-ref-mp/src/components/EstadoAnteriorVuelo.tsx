import { useState, useEffect, useRef } from 'react';

export const EstadoAnteriorVuelo = () => {
    const [estado, setEstado] = useState<string>('Programado');
    const estadoPrevioRef = useRef<string>('Programado');

    useEffect(() => {
        estadoPrevioRef.current = estado;
    }, [estado]);

    return (
        <div style={{ margin: '15px 0', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h3>4. Historial de Estado del Vuelo MM-102</h3>
            <p>Estado Actual: <strong style={{ color: 'blue' }}>{estado}</strong></p>
            <p>Estado Anterior: <strong>{estadoPrevioRef.current}</strong></p>
            
            <button onClick={() => setEstado('En Puerta')} style={{ marginRight: '5px', padding: '6px 10px' }}>
                En Puerta
            </button>
            <button onClick={() => setEstado('En Vuelo')} style={{ marginRight: '5px', padding: '6px 10px' }}>
                En Vuelo
            </button>
            <button onClick={() => setEstado('Aterrizado')} style={{ padding: '6px 10px' }}>
                Aterrizado
            </button>
        </div>
    );
};