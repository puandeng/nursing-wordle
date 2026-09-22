import './ClueList.css';

export default function ClueList({ clues, revealed }) {
  return (
    <div className="clue-list">
      <h2 className="clue-list__title">Clues</h2>
      <ol className="clue-list__items">
        {clues.map((clue, i) => (
          <li
            key={i}
            className={`clue-list__item ${i < revealed ? 'clue-list__item--visible' : 'clue-list__item--hidden'}`}
          >
            {i < revealed ? clue : '???'}
          </li>
        ))}
      </ol>
    </div>
  );
}
