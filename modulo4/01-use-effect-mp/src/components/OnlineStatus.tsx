import { useState, useEffect } from 'react';

export const OnlineStatus = () => {
    const getInitialOnline = (): boolean => {
        if (typeof navigator === 'undefined') return true;
        return 'onLine' in navigator ? (navigator as any).onLine : true;
    };

    const [isOnline, setIsOnline] = useState<boolean>(getInitialOnline());

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        if (typeof globalThis !== 'undefined' && (globalThis as any).addEventListener) {
            const g = globalThis as any;
            g.addEventListener('online', handleOnline);
            g.addEventListener('offline', handleOffline);

            return () => {
                g.removeEventListener('online', handleOnline);
                g.removeEventListener('offline', handleOffline);
            };
        }
        return undefined;
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