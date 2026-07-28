import { useState, useEffect } from 'react';

interface Piloto {
    id: number;
    name: string;
    email: string;
}

export const FetchUser = () => {
    const [piloto, setPiloto] = useState<Piloto | null>(null);

    useEffect(() => {
        const fetchFn = typeof globalThis !== 'undefined' ? (globalThis as any).fetch : fetch;

        fetchFn('https://jsonplaceholder.typicode.com/users/1')
            .then((res: any) => res.json())
            .then((data: Piloto) => setPiloto(data))
            .catch((err: any) => console.error(err));
    }, []);

    return (
        <div style={{ margin: '15px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h3>Piloto Asignado (Fetch API)</h3>
            {piloto ? (
                <div>
                    <p><strong>Nombre:</strong> {piloto.name}</p>
                    <p><strong>Contacto:</strong> {piloto.email}</p>
                </div>
            ) : (
                <p>Cargando información del piloto...</p>
            )}
        </div>
    );
};