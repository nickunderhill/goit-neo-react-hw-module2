import { useState, useEffect } from 'react';

import css from './App.module.css';
import Description from './description/Description.jsx';
import Feedback from './feedback/Feedback.jsx';
import Options from './options/Options.jsx';
import Notification from './notification/Notification.jsx';

function App() {
  const emptyFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    if (savedFeedback) {
      return JSON.parse(savedFeedback);
    } else {
      return emptyFeedback;
    }
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    if (feedbackType === 'reset') {
      setFeedback(emptyFeedback);
    } else {
      setFeedback(feedback => ({
        ...feedback,
        [feedbackType]: feedback[feedbackType] + 1,
      }));
    }
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div className={css.container}>
      <Description></Description>
      <Options updateFeedback={updateFeedback} total={totalFeedback}></Options>
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} total={totalFeedback} />
      ) : (
        <Notification></Notification>
      )}
    </div>
  );
}

export default App;
