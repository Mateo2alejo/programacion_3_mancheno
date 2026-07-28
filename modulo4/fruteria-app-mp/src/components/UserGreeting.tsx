import React from 'react';

interface UserGreetingProps {
  username: string;
}

export const UserGreeting: React.FC<UserGreetingProps> = ({ username }) => {
  return (
    <div style={{ background: '#f0fdf4', padding: '10px 15px', borderRadius: '6px', border: '1px solid #bbf7d0', marginBottom: '1rem' }}>
      <span style={{ color: '#166534', fontWeight: 'bold' }}>👤 Usuario Activo:</span> {username}
    </div>
  );
};