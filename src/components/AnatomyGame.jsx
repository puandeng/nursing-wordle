import { useState, useRef, useEffect, useMemo } from 'react';
import { getRandomPuzzle, searchParts, getPartPosition, CATEGORY_LABELS, CATEGORY_COLORS } from '../data/anatomy';
import './AnatomyGame.css';

const MAX_LIVES = 3;

function BodySilhouette() {
  return (
    <g className="anatomy-body" opacity="0.15">
      <ellipse cx="100" cy="32" rx="18" ry="22" />
      <rect x="93" y="50" width="14" height="14" rx="4" />
      <ellipse cx="100" cy="120" rx="32" ry="55" />
      <ellipse cx="56" cy="108" rx="8" ry="32" transform="rotate(12,56,108)" />
      <ellipse cx="42" cy="170" rx="7" ry="32" transform="rotate(8,42,170)" />
      <ellipse cx="34" cy="215" rx="6" ry="12" transform="rotate(5,34,215)" />
      <ellipse cx="144" cy="108" rx="8" ry="32" transform="rotate(-12,144,108)" />
      <ellipse cx="158" cy="170" rx="7" ry="32" transform="rotate(-8,158,170)" />
      <ellipse cx="166" cy="215" rx="6" ry="12" transform="rotate(-5,166,215)" />
      <ellipse cx="86" cy="248" rx="14" ry="48" transform="rotate(2,86,248)" />
      <ellipse cx="81" cy="330" rx="10" ry="42" transform="rotate(2,81,330)" />
      <ellipse cx="76" cy="382" rx="13" ry="7" />
      <ellipse cx="114" cy="248" rx="14" ry="48" transform="rotate(-2,114,248)" />
      <ellipse cx="119" cy="330" rx="10" ry="42" transform="rotate(-2,119,330)" />
      <ellipse cx="124" cy="382" rx="13" ry="7" />
    </g>
  );
}

function AnatomyDiagram({ category, path, revealedCount }) {
  const color = CATEGORY_COLORS[category] || '#aaa';
  const revealed = path.slice(0, revealedCount);
  const startPos = getPartPosition(category, path[0]);
  const endPos = getPartPosition(category, path[path.length - 1]);

  return (
    <svg viewBox="0 0 200 410" className="anatomy-diagram__svg">
      <BodySilhouette />

      {revealed.length > 1 && revealed.map((part, i) => {
        if (i === 0) return null;
        const prev = getPartPosition(category, revealed[i - 1]);
        const curr = getPartPosition(category, part);
        if (!prev || !curr) return null;
        return (
          <line
            key={`line-${i}`}
            x1={prev.x} y1={prev.y}
            x2={curr.x} y2={curr.y}
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.7"
            className="anatomy-line"
          />
        );
      })}

      {revealedCount < path.length && endPos && (
        <g className="anatomy-marker anatomy-marker--end">
          <circle cx={endPos.x} cy={endPos.y} r="8" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,2" />
          <text x={endPos.x} y={endPos.y - 12} textAnchor="middle" className="anatomy-label anatomy-label--end">
            {path[path.length - 1]}
          </text>
        </g>
      )}

      {revealed.map((part, i) => {
        const pos = getPartPosition(category, part);
        if (!pos) return null;
        const isStart = i === 0;
        const isEnd = i === path.length - 1;
        return (
          <g key={part} className={`anatomy-marker ${i === revealedCount - 1 && !isStart && !isEnd ? 'anatomy-marker--new' : ''}`}>
            <circle
              cx={pos.x} cy={pos.y} r="6"
              fill={isStart ? '#6366f1' : isEnd ? '#ef4444' : color}
              stroke="#fff" strokeWidth="1.5"
            />
            <text
              x={pos.x} y={pos.y - 10}
              textAnchor="middle"
              className={`anatomy-label ${isStart ? 'anatomy-label--start' : isEnd ? 'anatomy-label--end' : ''}`}
            >
              {part}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function PartSearch({ category, onGuess, disabled, exclude }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (query.length >= 1) {
      const matches = searchParts(query, category).filter(p => !exclude.includes(p));
      setResults(matches);
      setOpen(matches.length > 0);
      setActiveIdx(-1);
    } else {
      setResults([]);
      setOpen(false);
    }
  }, [query, category, exclude]);

  function handleSelect(part) {
    onGuess(part);
    setQuery('');
    setResults([]);
    setOpen(false);
    inputRef.current?.focus();
  }

  function handleKeyDown(e) {
    if (!open) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx(i => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx(i => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && activeIdx >= 0) {
      e.preventDefault();
      handleSelect(results[activeIdx]);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  useEffect(() => {
    if (activeIdx >= 0 && listRef.current) {
      listRef.current.children[activeIdx]?.scrollIntoView({ block: 'nearest' });
    }
  }, [activeIdx]);

  return (
    <div className="anatomy-search">
      <input
        ref={inputRef}
        type="text"
        className="anatomy-search__input"
        placeholder={disabled ? 'Puzzle complete' : 'Type an anatomy part...'}
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => results.length > 0 && setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 200)}
        disabled={disabled}
        autoComplete="off"
        spellCheck="false"
      />
      {open && (
        <ul className="anatomy-search__results" ref={listRef}>
          {results.map((part, i) => (
            <li
              key={part}
              className={`anatomy-search__result ${i === activeIdx ? 'anatomy-search__result--active' : ''}`}
              onMouseDown={() => handleSelect(part)}
              onMouseEnter={() => setActiveIdx(i)}
            >
              {part}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function AnatomyGame() {
  const [{ puzzle, index: puzzleIdx }, setPuzzleState] = useState(() => getRandomPuzzle(-1));
  const [revealedCount, setRevealedCount] = useState(1);
  const [lives, setLives] = useState(MAX_LIVES);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [wrongGuess, setWrongGuess] = useState(null);

  const { path, category, title } = puzzle;
  const start = path[0];
  const end = path[path.length - 1];
  const nextTarget = path[revealedCount];
  const stepsRemaining = path.length - revealedCount - 1;

  const exclude = useMemo(() => path.slice(0, revealedCount), [path, revealedCount]);

  function handleGuess(part) {
    if (gameOver) return;

    if (part === nextTarget) {
      const newRevealed = revealedCount + 1;
      setRevealedCount(newRevealed);
      setWrongGuess(null);
      if (newRevealed >= path.length) {
        setWon(true);
        setGameOver(true);
      }
    } else {
      const newLives = lives - 1;
      setLives(newLives);
      setWrongGuess(part);
      if (newLives <= 0) {
        setRevealedCount(path.length);
        setGameOver(true);
      }
    }
  }

  function handleNewPuzzle() {
    const next = getRandomPuzzle(puzzleIdx);
    setPuzzleState(next);
    setRevealedCount(1);
    setLives(MAX_LIVES);
    setGameOver(false);
    setWon(false);
    setWrongGuess(null);
  }

  return (
    <div className="anatomy-game">
      <div className="anatomy-game__info">
        <div className="anatomy-game__meta">
          <span className="anatomy-game__category" style={{ background: CATEGORY_COLORS[category] }}>
            {CATEGORY_LABELS[category]}
          </span>
          <span className="anatomy-game__lives">
            {Array.from({ length: MAX_LIVES }, (_, i) => (
              <span key={i} className={i < lives ? '' : 'anatomy-game__life--lost'}>
                {i < lives ? '❤' : '♡'}
              </span>
            ))}
          </span>
        </div>
        <h2 className="anatomy-game__title">{title}</h2>
        <p className="anatomy-game__path-label">
          <strong>{start}</strong> → <span className="anatomy-game__dots">
            {Array.from({ length: path.length - 2 }, (_, i) => (
              <span key={i} className={i < revealedCount - 1 ? 'anatomy-game__dot--filled' : 'anatomy-game__dot--empty'}>
                {i < revealedCount - 1 ? '●' : '○'}
              </span>
            ))}
          </span> → <strong>{end}</strong>
        </p>
      </div>

      <div className="anatomy-game__diagram">
        <AnatomyDiagram category={category} path={path} revealedCount={revealedCount} />
      </div>

      {!gameOver && (
        <div className="anatomy-game__prompt">
          <p className="anatomy-game__question">
            What {CATEGORY_LABELS[category].toLowerCase().replace(/s$/, '')} connects to <strong>{path[revealedCount - 1]}</strong>?
          </p>
          {stepsRemaining > 0 && (
            <p className="anatomy-game__steps">{stepsRemaining} step{stepsRemaining !== 1 ? 's' : ''} remaining</p>
          )}
        </div>
      )}

      <div className="anatomy-game__input">
        <PartSearch
          category={category}
          onGuess={handleGuess}
          disabled={gameOver}
          exclude={exclude}
        />
      </div>

      {wrongGuess && !gameOver && (
        <p className="anatomy-game__wrong">✗ {wrongGuess} is not correct</p>
      )}

      {gameOver && (
        <div className={`anatomy-game__result ${won ? 'anatomy-game__result--win' : 'anatomy-game__result--lose'}`}>
          <p className="anatomy-game__result-text">
            {won ? 'You completed the chain!' : 'The full chain was:'}
          </p>
          <p className="anatomy-game__chain">
            {path.join(' → ')}
          </p>
        </div>
      )}

      <button className="anatomy-game__shuffle" onClick={handleNewPuzzle}>
        Shuffle Puzzle
      </button>
    </div>
  );
}
