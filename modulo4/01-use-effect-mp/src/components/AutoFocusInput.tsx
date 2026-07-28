import { useEffect, useRef } from 'react';

export const AutoFocusInput = () => {
    const inputRef = useRef<any>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div style={{ margin: '15px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h3>AutoFocus Input</h3>
            <label htmlFor="codigoVuelo">Código de Vuelo: </label>
            <input
                ref={inputRef}
                id="codigoVuelo"
                type="text"
                placeholder="Ej. MM-204"
                style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
        </div>
    );
};