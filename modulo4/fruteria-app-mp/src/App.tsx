import React from 'react';
import { fruitsData } from './data/fruitsData';
import { WelcomeBanner } from './components/WelcomeBanner';
import { UserGreeting } from './components/UserGreeting';
import { CurrentDateDisplay } from './components/CurrentDateDisplay';
import { FruitList } from './components/FruitList';
import { MiniProfileCard } from './components/MiniProfileCard';
import { SimpleInfoCars } from './components/SimpleInfoCars';
import { SimpleInfoTable } from './components/SimpleInfoTable';
import { ConditionalGreeting } from './components/ConditionalGreeting';
import { ColoredBox } from './components/ColoredBox';

export function App() {
  return (
    <div style={{ width: '100vw', minHeight: '100vh', backgroundColor: '#f8fafc', padding: '2rem', boxSizing: 'border-box' }}>
      <main style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <WelcomeBanner />
        <UserGreeting username="Mateo Mancheno" />
        <CurrentDateDisplay />
        <MiniProfileCard />
        <ConditionalGreeting isMember={true} />
        <ColoredBox color="#0ea5e9" text="¡Promoción de la semana: 15% de descuento en frutos rojos!" />
        <SimpleInfoCars />
        <SimpleInfoTable />
        
        <h3 style={{ margin: '2rem 0 1rem 0' }}>Catálogo de Frutas Disponibles</h3>
        <FruitList fruits={fruitsData} />
      </main>
    </div>
  );
}

export default App;