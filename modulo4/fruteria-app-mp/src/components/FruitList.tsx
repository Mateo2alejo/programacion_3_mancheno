    import React from 'react';
    import { Fruit } from '../data/fruitsData';

    interface FruitListProps {
    fruits: Fruit[];
    }

    export const FruitList: React.FC<FruitListProps> = ({ fruits }) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        {fruits.map(fruit => (
            <div key={fruit.id} style={{ background: '#fff', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ margin: '0 0 8px 0', color: '#1e293b' }}>{fruit.name}</h3>
            <p style={{ margin: '4px 0', color: '#64748b' }}>Origen: {fruit.origin}</p>
            <p style={{ margin: '4px 0', color: '#16a34a', fontWeight: 'bold' }}>Precio: ${fruit.price.toFixed(2)}</p>
            <p style={{ margin: '4px 0', fontSize: '0.85rem' }}>Stock: {fruit.stock > 0 ? `${fruit.stock} unidades` : '❌ Agotado'}</p>
            </div>
        ))}
        </div>
    );
    };