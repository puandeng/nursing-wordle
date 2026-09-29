import { useState, useMemo } from 'react';
import {
  LESIONS, CATEGORIES, ROUNDS_PER_GAME,
  getRandomLesions, generateOptions,
} from '../data/lesions';
import './LesionGame.css';

export default function LesionGame() {
  const [questions, setQuestions] = useState(() => getRandomLesions(ROUNDS_PER_GAME));
  const [round, setRound] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [roundResults, setRoundResults] = useState([]);
  const [phase, setPhase] = useState('playing'); // playing | answered | finished

  const current = questions[round];
  const options = useMemo(
    () => generateOptions(current, LESIONS),
    [current]
  );

  function handleSelect(lesion) {
    if (phase !== 'playing') return;
    setSelected(lesion.id);
    const correct = lesion.id === current.id;
    if (correct) setScore(s => s + 1);
    setRoundResults(prev => [...prev, {
      lesion: current,
      guessed: lesion,
      correct,
    }]);
    setPhase('answered');
  }

  function handleNext() {
    setSelected(null);
    if (round + 1 >= questions.length) {
      setPhase('finished');
    } else {
      setRound(r => r + 1);
      setPhase('playing');
    }
  }

  function handlePlayAgain() {
    setQuestions(getRandomLesions(ROUNDS_PER_GAME));
    setRound(0);
    setSelected(null);
    setScore(0);
    setRoundResults([]);
    setPhase('playing');
  }

  if (phase === 'finished') {
    const pct = Math.round((score / ROUNDS_PER_GAME) * 100);
    return (
      <div className="lesion-game">
        <div className="lesion-game__final">
          <p className="lesion-game__final-emoji">
            {pct >= 80 ? '🏆' : pct >= 60 ? '🩺' : pct >= 40 ? '📚' : '🔬'}
          </p>
          <p className="lesion-game__final-title">
            {pct >= 80 ? 'Excellent!' : pct >= 60 ? 'Good Job!' : pct >= 40 ? 'Keep Studying!' : 'Review Time!'}
          </p>
          <p className="lesion-game__final-score">{score}/{ROUNDS_PER_GAME} correct</p>
        </div>

        <div className="lesion-game__summary">
          {roundResults.map((r, i) => (
            <div key={i} className={`lesion-game__summary-row${r.correct ? '' : ' lesion-game__summary-row--wrong'}`}>
              <img
                className="lesion-game__summary-img"
                src={`/lesions/${r.lesion.id}.jpg`}
                alt={r.lesion.name}
                onError={e => { e.target.style.display = 'none'; }}
              />
              <div className="lesion-game__summary-info">
                <span className="lesion-game__summary-name">{r.lesion.name}</span>
                {!r.correct && (
                  <span className="lesion-game__summary-guessed">You said: {r.guessed.name}</span>
                )}
              </div>
              <span className={`lesion-game__summary-icon${r.correct ? ' lesion-game__summary-icon--correct' : ' lesion-game__summary-icon--wrong'}`}>
                {r.correct ? '✓' : '✗'}
              </span>
            </div>
          ))}
        </div>

        <button className="lesion-game__btn lesion-game__btn--primary" onClick={handlePlayAgain}>
          Play Again
        </button>
      </div>
    );
  }

  const isAnswered = phase === 'answered';

  return (
    <div className="lesion-game">
      <div className="lesion-game__round">
        Question {round + 1}/{ROUNDS_PER_GAME}
        <span className="lesion-game__score-inline">{score} correct</span>
      </div>

      <div className="lesion-game__card">
        <div className="lesion-game__image-wrap">
          <img
            className="lesion-game__image"
            src={`/lesions/${current.id}.jpg`}
            alt="Identify this lesion"
            onError={e => {
              e.target.style.display = 'none';
              e.target.parentNode.innerHTML = '<div class="lesion-game__no-image">Image unavailable</div>';
            }}
          />
        </div>
        <p className="lesion-game__prompt">What type of lesion is this?</p>
      </div>

      <div className="lesion-game__options">
        {options.map(opt => {
          let cls = 'lesion-game__option';
          if (isAnswered) {
            if (opt.id === current.id) cls += ' lesion-game__option--correct';
            else if (opt.id === selected) cls += ' lesion-game__option--wrong';
            else cls += ' lesion-game__option--dim';
          }
          return (
            <button
              key={opt.id}
              className={cls}
              onClick={() => handleSelect(opt)}
              disabled={isAnswered}
            >
              {opt.name}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="lesion-game__explanation">
          <div className="lesion-game__explain-header">
            <span className="lesion-game__explain-name">{current.name}</span>
            <span className="lesion-game__explain-cat">{CATEGORIES[current.category]}</span>
          </div>
          <p className="lesion-game__explain-desc">{current.description}</p>
          <p className="lesion-game__explain-causes">
            <strong>Common causes: </strong>{current.causes}
          </p>
        </div>
      )}

      {isAnswered && (
        <button className="lesion-game__btn lesion-game__btn--primary" onClick={handleNext}>
          {round + 1 < questions.length ? 'Next Question' : 'See Results'}
        </button>
      )}
    </div>
  );
}
