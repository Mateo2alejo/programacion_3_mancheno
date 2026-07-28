import { useState, useRef, useEffect } from 'react';

export const ContadorRadarRenders = () => {
    const [filtroDestino, setFiltroDestino] = useState<string>('');
    const rendersCount = useRef<number>(1);

    useEffect(() => {
        rendersCount.current += 1;
    });

    return (
        <div style={{ margin: '15px 0', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h3>3. Monitor de Renderizado del Radar</h3>
            <input
                type="text"
                value={filtroDestino}
                onChange={(e: any) => setFiltroDestino(e.target.value)}
                placeholder="Filtrar por ciudad destino..."
                style={{ padding: '8px', width: '250px' }}
            />
            <p>Filtro aplicado: <strong>{filtroDestino || 'Ninguno'}</strong></p>
            <p style={{ color: '#555', fontSize: '0.9rem' }}>
                Lecturas del radar (Renderizados): <strong>{rendersCount.current}</strong>
            </p>
        </div>
    );
};