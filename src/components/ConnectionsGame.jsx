import { useState, useMemo, useCallback } from 'react';
import { getRandomPuzzle } from '../data/connections';
import './ConnectionsGame.css';

const MAX_LIVES = 3;
const GROUP_COLORS = ['#f9df6d', '#a0c35a', '#b0c4ef', '#ba81c5'];
const GROUP_TEXT_COLORS = ['#000', '#000', '#000', '#000'];

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildTiles(groups) {
  const tiles = [];
  groups.forEach((group, gi) => {
    group.words.forEach(word => {
      tiles.push({ word, groupIndex: gi });
    });
  });
  return shuffleArray(tiles);
}

export default function ConnectionsGame() {
  const [{ puzzle, index: puzzleIdx }, setPuzzleState] = useState(() => getRandomPuzzle(-1));
  const [tiles, setTiles] = useState(() => buildTiles(puzzle.groups));
  const [selected, setSelected] = useState([]);
  const [found, setFound] = useState([]);
  const [lives, setLives] = useState(MAX_LIVES);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [shake, setShake] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const remainingTiles = useMemo(
    () => tiles.filter(t => !found.includes(t.groupIndex)),
    [tiles, found]
  );

  function handleTileClick(tile) {
    if (gameOver || found.includes(tile.groupIndex)) return;
    setSelected(prev => {
      if (prev.find(s => s.word === tile.word)) {
        return prev.filter(s => s.word !== tile.word);
      }
      if (prev.length >= 3) return prev;
      return [...prev, tile];
    });
  }

  const handleSubmit = useCallback(() => {
    if (selected.length !== 3 || gameOver) return;

    const groupIdx = selected[0].groupIndex;
    const allSame = selected.every(s => s.groupIndex === groupIdx);

    if (allSame) {
      const newFound = [...found, groupIdx];
      setFound(newFound);
      setSelected([]);
      if (newFound.length === 4) {
        setWon(true);
        setGameOver(true);
        setShowResult(true);
      }
    } else {
      const newLives = lives - 1;
      setLives(newLives);
      setShake(true);
      setTimeout(() => {
        setShake(false);
        setSelected([]);
      }, 500);
      if (newLives <= 0) {
        setGameOver(true);
        setShowResult(false);
        setTimeout(() => {
          setFound([0, 1, 2, 3]);
          setShowResult(true);
        }, 600);
      }
    }
  }, [selected, gameOver, found, lives]);

  function handleShuffle() {
    if (gameOver) return;
    setTiles(prev => {
      const remaining = prev.filter(t => !found.includes(t.groupIndex));
      const locked = prev.filter(t => found.includes(t.groupIndex));
      return [...locked, ...shuffleArray(remaining)];
    });
  }

  function handleNewPuzzle() {
    const next = getRandomPuzzle(puzzleIdx);
    setPuzzleState(next);
    setTiles(buildTiles(next.puzzle.groups));
    setSelected([]);
    setFound([]);
    setLives(MAX_LIVES);
    setGameOver(false);
    setWon(false);
    setShowResult(false);
  }

  const sortedFound = [...found].sort((a, b) => a - b);

  return (
    <div className="connections">
      <div className="connections__status">
        <span className="connections__lives">
          {Array.from({ length: MAX_LIVES }, (_, i) => (
            <span key={i} className={`connections__life ${i < lives ? 'connections__life--active' : 'connections__life--lost'}`}>
              {i < lives ? '❤' : '♡'}
            </span>
          ))}
        </span>
        <span className="connections__found-count">
          {found.length} / 4 groups
        </span>
      </div>

      <div className="connections__found-groups">
        {sortedFound.map(gi => {
          const group = puzzle.groups[gi];
          return (
            <div
              key={gi}
              className="connections__found-group"
              style={{ background: GROUP_COLORS[group.difficulty], color: GROUP_TEXT_COLORS[group.difficulty] }}
            >
              <div className="connections__found-theme">{group.theme}</div>
              <div className="connections__found-words">{group.words.join(', ')}</div>
            </div>
          );
        })}
      </div>

      {remainingTiles.length > 0 && !gameOver && (
        <div className="connections__board">
          {remainingTiles.map((tile, i) => {
            const isSelected = selected.some(s => s.word === tile.word);
            return (
              <button
                key={`${tile.word}-${i}`}
                className={`connections__tile ${isSelected ? 'connections__tile--selected' : ''} ${shake && isSelected ? 'connections__tile--shake' : ''}`}
                onClick={() => handleTileClick(tile)}
              >
                {tile.word}
              </button>
            );
          })}
        </div>
      )}

      <div className="connections__actions">
        {!gameOver && (
          <>
            <button className="connections__btn connections__btn--shuffle" onClick={handleShuffle} disabled={remainingTiles.length === 0}>
              Shuffle
            </button>
            <button
              className="connections__btn connections__btn--submit"
              onClick={handleSubmit}
              disabled={selected.length !== 3}
            >
              Submit
            </button>
          </>
        )}
        {showResult && (
          <div className="connections__result">
            <p className={`connections__result-text ${won ? 'connections__result-text--win' : 'connections__result-text--lose'}`}>
              {won ? 'You got them all!' : 'Better luck next time!'}
            </p>
          </div>
        )}
        <button className="connections__btn connections__btn--new" onClick={handleNewPuzzle}>
          Shuffle Puzzle
        </button>
      </div>
    </div>
  );
}
