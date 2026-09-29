import { useState } from 'react';
import Game from './components/Game';
import ConnectionsGame from './components/ConnectionsGame';
import AnatomyGame from './components/AnatomyGame';
import ProcedureGame from './components/ProcedureGame';
import LesionGame from './components/LesionGame';
import './App.css';

const TABS = [
  { id: 'wordle', label: 'Drug Guesser', subtitle: 'Guess the drug from the clinical clues' },
  { id: 'connections', label: 'Connections', subtitle: 'Group the tiles by their shared theme' },
  { id: 'anatomy', label: 'Anatomy Chain', subtitle: 'Trace the anatomical path from start to end' },
  { id: 'procedure', label: 'Procedure Sort', subtitle: 'Drag the steps into the correct order' },
  { id: 'lesion', label: 'Lesion ID', subtitle: 'Identify the skin lesion from its image' },
];

function App() {
  const [tab, setTab] = useState('wordle');
  const current = TABS.find(t => t.id === tab);

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Nursing Games</h1>
        <nav className="app__tabs">
          {TABS.map(t => (
            <button
              key={t.id}
              className={`app__tab ${tab === t.id ? 'app__tab--active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </nav>
        <p className="app__subtitle">{current.subtitle}</p>
      </header>
      <main className="app__main">
        {tab === 'wordle' && <Game />}
        {tab === 'connections' && <ConnectionsGame />}
        {tab === 'anatomy' && <AnatomyGame />}
        {tab === 'procedure' && <ProcedureGame />}
        {tab === 'lesion' && <LesionGame />}
      </main>
    </div>
  );
}

export default App;
