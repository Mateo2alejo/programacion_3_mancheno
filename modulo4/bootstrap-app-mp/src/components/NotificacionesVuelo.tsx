import React from 'react';

export const NotificacionesVuelo: React.FC = () => {
  const alertas = [
    { id: 1, text: 'Vuelo MM-FLY-103 ha reportado retraso por condiciones meteorológicas.', type: 'warning' },
    { id: 2, text: 'Puerta de embarque asignada para MM-FLY-101: Puerta 4.', type: 'info' },
    { id: 3, text: 'Vuelo MM-FLY-106 cancelado temporalmente.', type: 'danger' }
  ];

  return (
    <div className="card border-0 shadow-sm p-4 bg-white mb-3">
      <h5 className="fw-bold mb-3">🔔 Centro de Notificaciones</h5>
      <div className="d-flex flex-column gap-2">
        {alertas.map(alerta => (
          <div key={alerta.id} className={`alert alert-${alerta.type} mb-0 py-2 small`}>
            {alerta.text}
          </div>
        ))}
      </div>
    </div>
  );
};