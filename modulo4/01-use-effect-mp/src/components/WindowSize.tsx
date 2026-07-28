import { useState, useEffect } from 'react';

export const WindowSize = () => {
    const getWidth = () =>
        typeof globalThis !== 'undefined' && typeof (globalThis as any).innerWidth === 'number'
            ? (globalThis as any).innerWidth
            : 0;

    const [ancho, setAncho] = useState<number>(getWidth());

    useEffect(() => {
        const handleResize = () => setAncho(getWidth());
        const target = typeof globalThis !== 'undefined' ? (globalThis as any) : null;

        if (!target || typeof target.addEventListener !== 'function') return;

        target.addEventListener('resize', handleResize);

        return () => target.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{ margin: '15px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h3>Resolución Pantalla Control MM</h3>
            <p>Ancho actual: {ancho}px</p>
        </div>
    );
};