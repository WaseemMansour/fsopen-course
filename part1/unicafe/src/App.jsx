import React, {useState} from 'react'
import {GiveFeedback} from "./components/Feedback/GiveFeedback.jsx";
import {Statistics} from "./components/Feedback/Statistics.jsx";
import './App.css';

const App = () => {
  const initialValue = {
    Good: 0,
    Neutral: 0,
    Bad: 0
  }
  const feedbackOptions = Object.keys(initialValue);
  const [feedback, setFeedback] = useState(initialValue)

  const handleSubmit = (value) => {
    setFeedback(()=> ({
      ...feedback,
      [value]: feedback[value] + 1
    }))
  }

  return (
    <div>
      <GiveFeedback options={feedbackOptions} onSubmit={handleSubmit} />
      <Statistics feedback={feedback} />
    </div>
  )
}

export default App
