import './ResultModal.css';

export default function ResultModal({ won, answer, guessCount, totalClues, onClose }) {
  return (
    <div className="result-overlay" onClick={onClose}>
      <div className="result-modal" onClick={e => e.stopPropagation()}>
        <h2 className={`result-modal__title ${won ? 'result-modal__title--win' : 'result-modal__title--lose'}`}>
          {won ? 'Correct!' : 'Out of Clues'}
        </h2>
        <p className="result-modal__answer">
          The answer was <strong>{answer.generic}</strong>
          {answer.brand && <span> ({answer.brand})</span>}
        </p>
        {won && (
          <p className="result-modal__stat">
            You got it in <strong>{guessCount}</strong> guess{guessCount !== 1 ? 'es' : ''} with{' '}
            <strong>{totalClues - guessCount}</strong> clue{totalClues - guessCount !== 1 ? 's' : ''} remaining
          </p>
        )}
        <button className="result-modal__btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
