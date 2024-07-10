// src/components/TopicSelection.js
import React, { useState } from 'react';

const TopicSelection = ({ onStart }) => {
  const [topic, setTopic] = useState('');

  const handleStart = () => {
    if (topic) {
      onStart(topic);
    } else {
      alert('Please select a topic');
    }
  };

  return (
    <div className="select-topic">
      <h1>Welcome to the Quiz App</h1>
      <label htmlFor="topic">Choose a topic:</label>
      <select id="topic" onChange={(e) => setTopic(e.target.value)}>
        <option value="">Select a topic</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="javascript">JavaScript</option>
        <option value="reactjs">ReactJS</option>
        <option value="backend">Backend Development</option>
      </select>
      <button onClick={handleStart}>Start Quiz</button>
    </div>
  );
};

export default TopicSelection;
