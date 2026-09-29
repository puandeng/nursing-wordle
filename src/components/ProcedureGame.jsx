import { useState, useRef, useCallback } from 'react';
import { getRandomProcedure, shuffleSteps, checkOrder, countCorrect } from '../data/procedures';
import './ProcedureGame.css';

export default function ProcedureGame() {
  const [procedure, setProcedure] = useState(() => getRandomProcedure());
  const [steps, setSteps] = useState(() => shuffleSteps(procedure.steps));
  const [checked, setChecked] = useState(false);
  const [won, setWon] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [phase, setPhase] = useState('playing');
  const [checkedCorrect, setCheckedCorrect] = useState(0);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);
  const [dragging, setDragging] = useState(null);

  const handleDragStart = useCallback((idx) => {
    dragItem.current = idx;
    setDragging(idx);
  }, []);

  const handleDragEnter = useCallback((idx) => {
    dragOverItem.current = idx;
  }, []);

  const handleDragEnd = useCallback(() => {
    if (dragItem.current === null || dragOverItem.current === null) {
      setDragging(null);
      return;
    }
    const from = dragItem.current;
    const to = dragOverItem.current;
    if (from !== to) {
      setSteps(prev => {
        const next = [...prev];
        const [item] = next.splice(from, 1);
        next.splice(to, 0, item);
        return next;
      });
      setChecked(false);
    }
    dragItem.current = null;
    dragOverItem.current = null;
    setDragging(null);
  }, []);

  const touchState = useRef({ startIdx: null, el: null, clone: null, lastOver: null });

  const handleTouchStart = useCallback((idx, e) => {
    const touch = e.touches[0];
    const el = e.currentTarget.closest('.procedure-game__step');
    const rect = el.getBoundingClientRect();
    const clone = el.cloneNode(true);
    clone.className = 'procedure-game__step procedure-game__step--clone';
    clone.style.width = rect.width + 'px';
    clone.style.left = rect.left + 'px';
    clone.style.top = rect.top + 'px';
    document.body.appendChild(clone);
    touchState.current = { startIdx: idx, el, clone, lastOver: idx, offsetY: touch.clientY - rect.top };
    setDragging(idx);
  }, []);

  const handleTouchMove = useCallback((e) => {
    const ts = touchState.current;
    if (!ts.clone) return;
    e.preventDefault();
    const touch = e.touches[0];
    ts.clone.style.top = (touch.clientY - ts.offsetY) + 'px';

    const elUnder = document.elementFromPoint(touch.clientX, touch.clientY);
    if (elUnder) {
      const stepEl = elUnder.closest('[data-step-idx]');
      if (stepEl) {
        const overIdx = parseInt(stepEl.dataset.stepIdx);
        ts.lastOver = overIdx;
      }
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    const ts = touchState.current;
    if (ts.clone) {
      ts.clone.remove();
    }
    if (ts.startIdx !== null && ts.lastOver !== null && ts.startIdx !== ts.lastOver) {
      const from = ts.startIdx;
      const to = ts.lastOver;
      setSteps(prev => {
        const next = [...prev];
        const [item] = next.splice(from, 1);
        next.splice(to, 0, item);
        return next;
      });
      setChecked(false);
    }
    touchState.current = { startIdx: null, el: null, clone: null, lastOver: null };
    setDragging(null);
  }, []);

  function handlePositionChange(fromIdx, newPos) {
    const target = newPos - 1;
    if (target < 0 || target >= steps.length || target === fromIdx) return;
    setSteps(prev => {
      const next = [...prev];
      const [item] = next.splice(fromIdx, 1);
      next.splice(target, 0, item);
      return next;
    });
    setChecked(false);
  }

  function handleCheck() {
    setAttempts(a => a + 1);
    setChecked(true);
    const correct = countCorrect(steps);
    setCheckedCorrect(correct);
    if (checkOrder(steps)) {
      setWon(true);
    }
  }

  function handleSkip() {
    const sorted = [...steps].sort((a, b) => a.correctIndex - b.correctIndex);
    setSteps(sorted);
    setChecked(true);
    setCheckedCorrect(sorted.length);
    setWon(false);
    setPhase('skipped');
  }

  function handleNewProcedure() {
    const next = getRandomProcedure(procedure.id);
    setProcedure(next);
    setSteps(shuffleSteps(next.steps));
    setChecked(false);
    setWon(false);
    setAttempts(0);
    setShowHint(false);
    setPhase('playing');
    setCheckedCorrect(0);
  }

  function handleHint() {
    setShowHint(true);
    const firstWrongIdx = steps.findIndex((s, i) => s.correctIndex !== i);
    if (firstWrongIdx === -1) return;

    const correctStep = steps.find(s => s.correctIndex === firstWrongIdx);
    if (!correctStep) return;

    setSteps(prev => {
      const next = prev.filter(s => s !== correctStep);
      next.splice(firstWrongIdx, 0, correctStep);
      return next;
    });
    setChecked(false);
    setTimeout(() => setShowHint(false), 300);
  }

  const total = steps.length;

  return (
    <div className="procedure-game">
      <div className="procedure-game__header">
        <h2 className="procedure-game__title">{procedure.title}</h2>
        <p className="procedure-game__desc">
          Arrange the steps in the correct order
        </p>
      </div>

      <div className="procedure-game__progress">
        <div className="procedure-game__progress-bar">
          <div
            className="procedure-game__progress-fill"
            style={{ width: `${(checkedCorrect / total) * 100}%` }}
          />
        </div>
        <span className="procedure-game__progress-label">
          {checked ? `${checkedCorrect}/${total} correct` : `0/${total}`}
        </span>
      </div>

      <div
        className="procedure-game__steps"
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {steps.map((step, idx) => {
          const isCorrect = checked && step.correctIndex === idx;
          const isWrong = checked && step.correctIndex !== idx;
          const isLocked = won || phase === 'skipped';
          return (
            <div
              key={step.correctIndex}
              data-step-idx={idx}
              className={`procedure-game__step${
                isCorrect ? ' procedure-game__step--correct' : ''
              }${isWrong ? ' procedure-game__step--wrong' : ''
              }${dragging === idx ? ' procedure-game__step--dragging' : ''
              }${isLocked ? ' procedure-game__step--locked' : ''}`}
              draggable={!isLocked}
              onDragStart={() => handleDragStart(idx)}
              onDragEnter={() => handleDragEnter(idx)}
              onDragEnd={handleDragEnd}
              onDragOver={e => e.preventDefault()}
            >
              {!isLocked ? (
                <input
                  type="text"
                  inputMode="numeric"
                  className="procedure-game__step-input"
                  value={idx + 1}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (!isNaN(val)) handlePositionChange(idx, val);
                  }}
                  onFocus={e => e.target.select()}
                  onClick={e => e.stopPropagation()}
                  onDragStart={e => e.stopPropagation()}
                />
              ) : (
                <span className="procedure-game__step-num">{idx + 1}</span>
              )}
              <span className="procedure-game__step-text">{step.text}</span>
              {!isLocked && (
                <span
                  className="procedure-game__drag-handle"
                  onTouchStart={(e) => handleTouchStart(idx, e)}
                  aria-label="Drag to reorder"
                >⠿</span>
              )}
              {checked && !won && (
                <span className={`procedure-game__step-icon${isCorrect ? ' procedure-game__step-icon--correct' : ' procedure-game__step-icon--wrong'}`}>
                  {isCorrect ? '✓' : '✗'}
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="procedure-game__actions">
        {!won && phase === 'playing' && (
          <>
            <button className="procedure-game__btn procedure-game__btn--primary" onClick={handleCheck}>
              Check Order
            </button>
            <div className="procedure-game__actions-row">
              {attempts > 0 && (
                <button className="procedure-game__btn procedure-game__btn--hint" onClick={handleHint}>
                  Fix One Step
                </button>
              )}
              <button className="procedure-game__btn procedure-game__btn--skip" onClick={handleSkip}>
                Skip — Show Answer
              </button>
            </div>
          </>
        )}
        {won && (
          <div className="procedure-game__result">
            <p className="procedure-game__result-text">
              {attempts === 1 ? 'Perfect on the first try!' : `Correct in ${attempts} attempt${attempts > 1 ? 's' : ''}!`}
            </p>
            <button className="procedure-game__btn procedure-game__btn--primary" onClick={handleNewProcedure}>
              Next Procedure
            </button>
          </div>
        )}
        {phase === 'skipped' && (
          <div className="procedure-game__result">
            <p className="procedure-game__result-text procedure-game__result-text--skipped">
              Here's the correct order — study it and try the next one!
            </p>
            <button className="procedure-game__btn procedure-game__btn--primary" onClick={handleNewProcedure}>
              Next Procedure
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
