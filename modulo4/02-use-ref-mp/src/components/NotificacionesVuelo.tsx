import { useState, useRef, useEffect } from 'react';

export const NotificacionesVuelo = () => {
    const [mensajes, setMensajes] = useState<string[]>([
        '08:00 - Vuelo MM-204 preparado para abordaje.',
        '08:15 - Puerta B3 abierta.'
    ]);
    const finListaRef = useRef<any>(null);

    const agregarNotificacion = () => {
        const nuevaHora = new Date().toLocaleTimeString();
        setMensajes((prev) => [...prev, `${nuevaHora} - Actualización de estado en radar.`]);
    };

    useEffect(() => {
        finListaRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [mensajes]);

    return (
        <div style={{ margin: '15px 0', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h3>6. Bitácora de Torre de Control (Auto-Scroll)</h3>
            <div style={{ height: '100px', overflowY: 'auto', border: '1px solid #eee', padding: '8px', marginBottom: '10px' }}>
                {mensajes.map((msg, index) => (
                    <p key={index} style={{ margin: '4px 0', fontSize: '0.9rem' }}>{msg}</p>
                ))}
                <div ref={finListaRef} />
            </div>
            <button onClick={agregarNotificacion} style={{ padding: '8px 12px', cursor: 'pointer' }}>
                ➕ Agregar Notificación
            </button>
        </div>
    );
};