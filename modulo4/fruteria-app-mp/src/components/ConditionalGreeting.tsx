import React from 'react';

interface ConditionalGreetingProps {
  isMember: boolean;
}

export const ConditionalGreeting: React.FC<ConditionalGreetingProps> = ({ isMember }) => {
  return (
    <div style={{ marginBottom: '1rem', fontSize: '0.95rem' }}>
      {isMember ? '⭐ ¡Bienvenido de nuevo, socio VIP! Tienes 10% de descuento.' : '💡 Regístrate como socio para obtener beneficios exclusivos.'}
    </div>
  );
};