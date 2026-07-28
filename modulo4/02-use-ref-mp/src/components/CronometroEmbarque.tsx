import { useState, useRef } from 'react';

export const CronometroEmbarque = () => {
    const [segundos, setSegundos] = useState<number>(0);
    const timerRef = useRef<any>(null);

    const iniciarAbordaje = () => {
        if (timerRef.current !== null) return;
        
        // Accedemos a las funciones globales a través de globalThis para evitar el chequeo de tipos
        const setInt = (globalThis as any).setInterval;
        
        timerRef.current = setInt(() => {
            setSegundos((prev) => prev + 1);
        }, 1000);
    };

    const pausarAbordaje = () => {
        if (timerRef.current !== null) {
            const clearIntervalFn = (globalThis as any).clearInterval;
            clearIntervalFn(timerRef.current);
            timerRef.current = null;
        }
    };

    const reiniciarAbordaje = () => {
        pausarAbordaje();
        setSegundos(0);
    };

    return (
        <div style={{ margin: '15px 0', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h3>2. Cronómetro de Abordaje (FlyMM)</h3>
            <p style={{ fontSize: '1.2rem' }}>
                Tiempo transcurrido en puerta: <strong>{segundos} seg</strong>
            </p>
            <button onClick={iniciarAbordaje} style={{ padding: '8px 12px', marginRight: '5px', cursor: 'pointer' }}>
                ▶ Iniciar
            </button>
            <button onClick={pausarAbordaje} style={{ padding: '8px 12px', marginRight: '5px', cursor: 'pointer' }}>
                ⏸ Pausar
            </button>
            <button onClick={reiniciarAbordaje} style={{ padding: '8px 12px', cursor: 'pointer' }}>
                🔄 Reiniciar
            </button>
        </div>
    );
};