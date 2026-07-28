import React, { useState } from 'react';

interface AudioAnunciosProps {
  flightCode: string;
}

export const AudioAnuncios: React.FC<AudioAnunciosProps> = ({ flightCode }) => {
  const [anuncioActivo, setAnuncioActivo] = useState(false);

  const handleEmitirAnuncio = () => {
    setAnuncioActivo(true);
    setTimeout(() => setAnuncioActivo(false), 4000);
  };

  return (
    <div className="card border-0 shadow-sm p-4 bg-white mb-3">
      <h5 className="fw-bold mb-2">📢 Sistema de Megafonía</h5>
      <p className="text-muted small mb-3">Emitir anuncio de puerta de embarque para el vuelo activo.</p>
      
      <button 
        onClick={handleEmitirAnuncio} 
        className="btn btn-dark w-100 fw-semibold"
        disabled={anuncioActivo}
      >
        {anuncioActivo ? '🔊 Reproduciendo anuncio en altavoces...' : `🎙️ Anunciar ${flightCode} por Altavoz`}
      </button>

      {anuncioActivo && (
        <div className="alert alert-success mt-3 mb-0 small text-center">
          "Atención pasajeros, inician el proceso de abordaje para el vuelo {flightCode}."
        </div>
      )}
    </div>
  );
};