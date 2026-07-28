import React from 'react';

interface StatusBadgeProps {
  fresh: boolean;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ fresh }) => {
  return (
    <span style={{ 
      padding: '4px 8px', 
      borderRadius: '4px', 
      fontSize: '0.8rem', 
      fontWeight: 'bold',
      background: fresh ? '#dcfce7' : '#fee2e2',
      color: fresh ? '#166534' : '#991b1b'
    }}>
      {fresh ? '✨ Fruta Fresca' : '⚠️ En Oferta / Madura'}
    </span>
  );
};