import { useState, useEffect } from 'react';

export const LiveClock = () => {
    const [hora, setHora] = useState<string>(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setHora(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ margin: '15px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h3>Reloj Torre de Control</h3>
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{hora}</p>
        </div>
    );
};