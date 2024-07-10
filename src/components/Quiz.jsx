// src/components/Quiz.js
import React from 'react';
import questions from './questions.json';

const Quiz = ({ topic, onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState('');

  const question = questions[topic][currentQuestionIndex];

  const handleAnswer = (answer) => {
    if (answer === question.correct_answer) {
      setScore(score + 20);
    }
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    setSelectedAnswer('');
    if (currentQuestionIndex + 1 < questions[topic].length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onFinish(score);
    }
  };

  if (!question) return null;

  return (
    <div>
      <h2>{question.question}</h2>
      <div>
        {Object.entries(question.answers).map(([key, answer]) => (
          <button
            key={key}
            onClick={() => handleAnswer(key)}
            className={selectedAnswer === key ? (key === question.correct_answer ? 'correct' : 'incorrect') : ''}
          >
            {answer}
          </button>
        ))}
      </div>
      <button onClick={handleNext}>
        {currentQuestionIndex + 1 === questions[topic].length ? 'Finish' : 'Next Question'}
      </button>
    </div>
  );
};

export default Quiz;
