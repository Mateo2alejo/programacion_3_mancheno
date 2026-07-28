import { AutoFocusInput } from './components/AutoFocusInput';
import { DebounceSearch } from './components/DebounceSearch';
import { DocumentTitle } from './components/DocumentTitle';
import { FetchUser } from './components/FetchUser';
import { LiveClock } from './components/LiveClock';
import { OnlineStatus } from './components/OnlineStatus';
import { SearchWithEffect } from './components/SearchWithEffect';
import { WindowSize } from './components/WindowSize';

export function App() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Gestión de Vuelos MM - FlyMM</h1>
            <h2>Módulo 01: useEffect Hooks</h2>
            <hr />
            <LiveClock />
            <OnlineStatus />
            <AutoFocusInput />
            <DocumentTitle />
            <SearchWithEffect />
            <DebounceSearch />
            <FetchUser />
            <WindowSize />
        </div>
    );
}

export default App;