import { FocusCodigoVuelo } from './components/FocusCodigoVuelo';
import { CronometroEmbarque } from './components/CronometroEmbarque';
import { ContadorRadarRenders } from './components/ContadorRadarRenders';
import { EstadoAnteriorVuelo } from './components/EstadoAnteriorVuelo';
import { AudioAnuncios } from './components/AudioAnuncios';
import { NotificacionesVuelo } from './components/NotificacionesVuelo';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '650px', margin: '0 auto' }}>
      <h1>✈️ Sistema FlyMM - Módulo useRef</h1>
      <p style={{ color: '#666' }}>Gestión de referencias e interacciones en tiempo real</p>
      <hr />
      
      <FocusCodigoVuelo />
      <CronometroEmbarque />
      <ContadorRadarRenders />
      <EstadoAnteriorVuelo />
      <AudioAnuncios />
      <NotificacionesVuelo />
    </div>
  );
}

export default App;