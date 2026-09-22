import { useState, useMemo, useCallback, useEffect } from 'react';
import { getDailyPuzzle, getPuzzleByIndex, TOTAL_PUZZLES } from '../data/puzzles';
import { buildSearchIndex } from '../data/drugs';
import DrugSearch from './DrugSearch';
import ClueList from './ClueList';
import GuessHistory from './GuessHistory';
import ResultModal from './ResultModal';
import './Game.css';

const TOTAL_CLUES = 10;
const STATS_KEY = 'nursing-wordle-stats';

function loadStats() {
  try {
    return JSON.parse(localStorage.getItem(STATS_KEY)) || { played: 0, won: 0, streak: 0, maxStreak: 0, distribution: {} };
  } catch {
    return { played: 0, won: 0, streak: 0, maxStreak: 0, distribution: {} };
  }
}

function saveStats(stats) {
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

function getDailyIndex() {
  const today = new Date();
  const epoch = new Date(2024, 0, 1);
  return Math.floor((today - epoch) / (1000 * 60 * 60 * 24)) % TOTAL_PUZZLES;
}

export default function Game() {
  const [puzzleIdx, setPuzzleIdx] = useState(getDailyIndex);
  const puzzle = useMemo(() => getPuzzleByIndex(puzzleIdx), [puzzleIdx]);
  const searchIndex = useMemo(() => buildSearchIndex(), []);

  const [guesses, setGuesses] = useState([]);
  const [revealed, setRevealed] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function nextPuzzle() {
    setPuzzleIdx(prev => {
      let next;
      do { next = Math.floor(Math.random() * TOTAL_PUZZLES); } while (next === prev && TOTAL_PUZZLES > 1);
      return next;
    });
    setGuesses([]);
    setRevealed(1);
    setGameOver(false);
    setWon(false);
    setShowModal(false);
  }

  const isCorrect = useCallback((entry) => {
    const g = entry.generic.toLowerCase();
    return g === puzzle.answer.generic.toLowerCase();
  }, [puzzle]);

  const handleGuess = useCallback((entry) => {
    if (gameOver) return;

    const alreadyGuessed = guesses.some(g => g.generic.toLowerCase() === entry.generic.toLowerCase());
    if (alreadyGuessed) return;

    const correct = isCorrect(entry);
    const newGuesses = [...guesses, { label: entry.label, generic: entry.generic, correct }];
    setGuesses(newGuesses);

    if (correct) {
      setWon(true);
      setGameOver(true);
      setShowModal(true);
      setRevealed(TOTAL_CLUES);
      const stats = loadStats();
      stats.played += 1;
      stats.won += 1;
      stats.streak += 1;
      stats.maxStreak = Math.max(stats.maxStreak, stats.streak);
      const key = String(newGuesses.length);
      stats.distribution[key] = (stats.distribution[key] || 0) + 1;
      saveStats(stats);
    } else {
      const nextRevealed = Math.min(revealed + 1, TOTAL_CLUES);
      setRevealed(nextRevealed);
      if (nextRevealed >= TOTAL_CLUES) {
        setGameOver(true);
        setShowModal(true);
        const stats = loadStats();
        stats.played += 1;
        stats.streak = 0;
        saveStats(stats);
      }
    }
  }, [gameOver, guesses, isCorrect, revealed]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape' && showModal) setShowModal(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [showModal]);

  return (
    <div className="game">
      <div className="game__status">
        <span className="game__clue-count">
          Clue {Math.min(revealed, TOTAL_CLUES)} / {TOTAL_CLUES}
        </span>
        <span className="game__guess-count">
          {guesses.length} guess{guesses.length !== 1 ? 'es' : ''}
        </span>
      </div>

      <ClueList clues={puzzle.clues} revealed={revealed} />

      <div className="game__search">
        <DrugSearch index={searchIndex} onGuess={handleGuess} disabled={gameOver} />
      </div>

      <GuessHistory guesses={guesses} />

      <button className="game__next" onClick={nextPuzzle}>
        Shuffle
      </button>

      {showModal && (
        <ResultModal
          won={won}
          answer={puzzle.answer}
          guessCount={guesses.length}
          totalClues={TOTAL_CLUES}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
