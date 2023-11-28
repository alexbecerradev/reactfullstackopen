import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const Titles = ({text}) => <h1>{text}</h1>;
  const All = ({good,neutral,bad}) => <p>all: {good+neutral+bad}</p>
  const Average = ({good,neutral,bad}) => <p>average: {(good+neutral+bad)/3}</p>
  const Positive = ({good, neutral,bad}) => <p>positive: {good/(good+neutral+bad) *10}</p> 
  
  return (
    <div>
      <Titles text="give feedback"/>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad - 1)}>Bad</button>
      <Titles text="statistics"/>
      <ul>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <All good={good} neutral={neutral} bad={bad}></All>
      <Average good={good} neutral={neutral} bad={bad}></Average>
      <Positive good={good} neutral={neutral} bad={bad}></Positive>
      </ul>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)