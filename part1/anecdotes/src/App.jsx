import { useState } from 'react'
import {Anecdote} from "./AnecdoteOfTheDay.jsx";
import './App.css';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const [mostVotedIndex, setMostVotedIndex] = useState(0)
  const hasVote = points?.some((value) => value > 0)

  const getRandomAnecdote = () => {
    const indices = [...Array(anecdotes.length).keys()].filter(index => index !== selected);
    const randomIndex = indices[Math.floor(Math.random() * indices.length)];
    setSelected(randomIndex);
  }

  const handleVote = () => {
    const updatedPoints = [...points]
    updatedPoints[selected] = points[selected] + 1;
    setPoints(updatedPoints)

    const newMostVoted = updatedPoints.reduce((maxIndex, current, i, arr) =>
      current > arr[maxIndex] ? i : maxIndex, 0);
    setMostVotedIndex(newMostVoted);
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Anecdote content={anecdotes[selected]} points={points[selected]} />
      <div>
        <button onClick={handleVote}>vote</button>
        <button onClick={getRandomAnecdote}>next anecdote</button>
      </div>
      {hasVote
        ? <>
          <h2>Anecdote with most votes</h2>
          <Anecdote content={anecdotes[mostVotedIndex]} points={points[mostVotedIndex]} />
          </>
        : null
      }
    </div>
  )
}

export default App
