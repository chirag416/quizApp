// src/App.js
import React, { useState } from 'react';
import TopicSelection from './components/TopicSelection';
import Quiz from './components/Quiz';
import Result from './components/Result';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('selection');
  const [topic, setTopic] = useState('');
  const [score, setScore] = useState(0);

  const handleStartQuiz = (selectedTopic) => {
    setTopic(selectedTopic);
    setCurrentScreen('quiz');
  };

  const handleFinishQuiz = (finalScore) => {
    setScore(finalScore);
    setCurrentScreen('results');
  };

  const handleRestartQuiz = () => {
    setTopic('');
    setScore(0);
    setCurrentScreen('selection');
  };

  return (
    <div className="App">
      {currentScreen === 'selection' && <TopicSelection onStart={handleStartQuiz} />}
      {currentScreen === 'quiz' && <Quiz topic={topic} onFinish={handleFinishQuiz} />}
      {currentScreen === 'results' && <Result score={score} onRestart={handleRestartQuiz} />}
    </div>
  );
};

export default App;
