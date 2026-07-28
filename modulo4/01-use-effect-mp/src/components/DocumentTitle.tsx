import { useState, useEffect } from 'react';

export const DocumentTitle = () => {
    const [contadorVuelos, setContadorVuelos] = useState<number>(0);

    useEffect(() => {
        const doc: any = (globalThis as any).document;                                  
        if (doc) doc.title = `Vuelos MM (${contadorVuelos} registrados)`;
    }, [contadorVuelos]);

    return (
        <div style={{ margin: '15px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h3>Título Dinámico</h3>
            <p>Vuelos programados: {contadorVuelos}</p>
            <button onClick={() => setContadorVuelos(contadorVuelos + 1)}>Registrar Nuevo Vuelo</button>
        </div>
    );
};