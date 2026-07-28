import { useRef } from 'react';

export const AudioAnuncios = () => {
    const audioRef = useRef<any>(null);

    const reproducir = () => {
        audioRef.current?.play();
    };

    const pausar = () => {
        audioRef.current?.pause();
    };

    return (
        <div style={{ margin: '15px 0', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h3>5. Sistema de Perifoneo / Anuncios FlyMM</h3>
            <audio
                ref={audioRef}
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                preload="none"
            />
            <p>Audio de abordaje de emergencia:</p>
            <button onClick={reproducir} style={{ padding: '8px 12px', marginRight: '5px', cursor: 'pointer' }}>
                🔊 Reproducir Anuncio
            </button>
            <button onClick={pausar} style={{ padding: '8px 12px', cursor: 'pointer' }}>
                🔇 Pausar Anuncio
            </button>
        </div>
    );
};