import React, { useState, useEffect } from 'react';

interface CronometroEmbarqueProps {
  flightCode: string;
}

export const CronometroEmbarque: React.FC<CronometroEmbarqueProps> = ({ flightCode }) => {
  const [secondsLeft, setSecondsLeft] = useState(300); // 5 minutos de cuenta regresiva

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setInterval(() => {
      setSecondsLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className="card border-0 shadow-sm p-3 bg-white mb-3">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h6 className="text-muted mb-1">⏱️ Cronómetro de Embarque ({flightCode})</h6>
          <span className="fs-4 fw-bold text-danger">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </span>
        </div>
        <span className={`badge ${secondsLeft > 60 ? 'bg-warning text-dark' : 'bg-danger'}`}>
          {secondsLeft > 60 ? 'Embarcando' : 'Última Llamada'}
        </span>
      </div>
    </div>
  );
};