import css from './Feedback.module.css';

function Feedback({ feedback, total, positivePercentage }) {
  return (
    <div className={css.feedback}>
      <p>
        Good: <span>{feedback.good}</span>
      </p>
      <p>
        Netural: <span>{feedback.neutral}</span>
      </p>
      <p>
        Bad: <span>{feedback.bad}</span>
      </p>
      <p>
        Total: <span>{total}</span>
      </p>
      <p>
        Positive: <span>{positivePercentage}%</span>
      </p>
    </div>
  );
}

export default Feedback;
