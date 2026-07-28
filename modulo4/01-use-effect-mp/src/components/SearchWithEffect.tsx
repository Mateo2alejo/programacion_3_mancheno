import { useState, useEffect } from 'react';
export const SearchWithEffect = () => {
    const initialOnline = typeof globalThis !== 'undefined' && (globalThis as any).navigator
        ? (globalThis as any).navigator.onLine
        : true;
    const [isOnline, setIsOnline] = useState<boolean>(initialOnline);

    useEffect(() => {
        if (typeof globalThis === 'undefined') return;

        const w = globalThis as any;
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        w.addEventListener('online', handleOnline);
        w.addEventListener('offline', handleOffline);

        return () => {
            w.removeEventListener('online', handleOnline);
            w.removeEventListener('offline', handleOffline);
        };
    }, []);

    return (
        <div style={{ margin: '15px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h3>Estado de Conexión del Radar</h3>
            <p style={{ color: isOnline ? 'green' : 'red', fontWeight: 'bold' }}>
                {isOnline ? 'CONECTADO AL SISTEMA DE RADAR' : 'SIN CONEXIÓN - MODO OFFLINE'}
            </p>
        </div>
    );
};