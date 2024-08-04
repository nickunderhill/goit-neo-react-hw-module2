import css from './Feedback.module.css';

function Feedback({ feedback, total }) {
  const positivePercentage = total ? (feedback.good / total) * 100 : 0;
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
        Positive: <span>{positivePercentage.toFixed(2)}%</span>
      </p>
    </div>
  );
}

export default Feedback;
