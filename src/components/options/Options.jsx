import css from './Options.module.css';

function Options({ updateFeedback, total }) {
  return (
    <>
      <div className={css.options}>
        <button className={css['good']} onClick={() => updateFeedback('good')}>
          Good
        </button>
        <button
          className={css['neutral']}
          onClick={() => updateFeedback('neutral')}
        >
          Neutral
        </button>
        <button className={css['bad']} onClick={() => updateFeedback('bad')}>
          Bad
        </button>
        {total > 0 && (
          <button
            className={css['reset']}
            onClick={() => updateFeedback('reset')}
          >
            Reset
          </button>
        )}
      </div>
    </>
  );
}

export default Options;
