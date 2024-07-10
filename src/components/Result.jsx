// src/components/Result.js
import React from 'react';

const Result = ({ score, onRestart }) => {
  return (
    <div className="results">
      <h1>Quiz Completed!</h1>
      <p>Your score is: {score}</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default Result;
