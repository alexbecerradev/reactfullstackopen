import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({});

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * props.anecdotes.length);
    setSelected(randomIndex);
  };

  const handleVote = () => {
    setVotes({
      ...votes,
      [selected]: (votes[selected] || 0) + 1
    });
  };

  const mostVotedIndex = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b, null);

  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>Votes: {votes[selected] || 0}</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>
      <h2>Most Voted Anecdote</h2>
      {mostVotedIndex !== null && (
        <p>{props.anecdotes[mostVotedIndex]}</p>
      )}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)