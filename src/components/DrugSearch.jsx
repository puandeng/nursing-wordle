import { useState, useRef, useEffect } from 'react';
import { searchDrugs } from '../data/drugs';
import './DrugSearch.css';

export default function DrugSearch({ index, onGuess, disabled }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (query.length >= 1) {
      const matches = searchDrugs(query, index);
      setResults(matches);
      setOpen(matches.length > 0);
      setActiveIdx(-1);
    } else {
      setResults([]);
      setOpen(false);
    }
  }, [query, index]);

  function handleSelect(entry) {
    onGuess(entry);
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
      const el = listRef.current.children[activeIdx];
      el?.scrollIntoView({ block: 'nearest' });
    }
  }, [activeIdx]);

  return (
    <div className="drug-search">
      <div className="drug-search__input-wrap">
        <input
          ref={inputRef}
          type="text"
          className="drug-search__input"
          placeholder={disabled ? 'Game over' : 'Type a drug name...'}
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => results.length > 0 && setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 200)}
          disabled={disabled}
          autoComplete="off"
          spellCheck="false"
        />
        {query && !disabled && (
          <button className="drug-search__clear" onClick={() => { setQuery(''); inputRef.current?.focus(); }}>
            &times;
          </button>
        )}
      </div>
      {open && (
        <ul className="drug-search__results" ref={listRef}>
          {results.map((entry, i) => (
            <li
              key={`${entry.generic}-${entry.label}-${i}`}
              className={`drug-search__result ${i === activeIdx ? 'drug-search__result--active' : ''}`}
              onMouseDown={() => handleSelect(entry)}
              onMouseEnter={() => setActiveIdx(i)}
            >
              <span className="drug-search__result-name">{entry.label}</span>
              <span className="drug-search__result-meta">
                {entry.type === 'brand' ? entry.generic : entry.brand}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
