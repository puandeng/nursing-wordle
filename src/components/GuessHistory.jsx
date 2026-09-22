import './GuessHistory.css';

export default function GuessHistory({ guesses }) {
  if (guesses.length === 0) return null;

  return (
    <div className="guess-history">
      <h3 className="guess-history__title">Guesses</h3>
      <div className="guess-history__list">
        {guesses.map((g, i) => (
          <div key={i} className={`guess-history__item ${g.correct ? 'guess-history__item--correct' : 'guess-history__item--wrong'}`}>
            <span className="guess-history__number">{i + 1}.</span>
            <span className="guess-history__drug">{g.label}</span>
            <span className="guess-history__icon">{g.correct ? '✓' : '✗'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
