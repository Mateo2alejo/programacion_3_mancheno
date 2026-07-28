    import React from 'react';

    export const MiniProfileCard: React.FC = () => {
    return (
        <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div style={{ width: '45px', height: '45px', background: '#16a34a', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
            MM
        </div>
        <div>
            <h4 style={{ margin: 0, color: '#1e293b' }}>Mateo Mancheno</h4>
            <p style={{ margin: 0, color: '#64748b', fontSize: '0.85rem' }}>Administrador de Frutería</p>
        </div>
        </div>
    );
    };