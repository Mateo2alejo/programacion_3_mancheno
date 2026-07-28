import React from 'react';

interface ColoredBoxProps {
  color: string;
  text: string;
}

export const ColoredBox: React.FC<ColoredBoxProps> = ({ color, text }) => {
  return (
    <div style={{ background: color, color: '#fff', padding: '1rem', borderRadius: '6px', textAlign: 'center', fontWeight: 'bold', marginBottom: '1rem' }}>
      {text}
    </div>
  );
};