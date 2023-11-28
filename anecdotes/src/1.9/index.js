import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Results = (props) => (
  <div>
    <p>Good: {props.good}</p>
    <p>Neutral: {props.neutral}</p>
    <p>Bad: {props.bad}</p>
  </div>
  );

  const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
  
    if (total === 0) {
      return <p>No feedback given yet.</p>;
    }
  
    const average = (good - bad) / total;
    const positivePercentage = (good / total) * 100;
  
    return (
      <div>
        <StatisticLine text="All" value={total} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive" value={`${positivePercentage}%`} />
      </div>
    );
  };
  const Button = ({ text, handleClick }) => (
    <button onClick={handleClick}>{text}</button>
  );
  
  const StatisticLine = ({ text, value }) => (
    <p>
      {text}: {value}
    </p>
  );
  // Implementación de Statistics
  // Puedes utilizar las props pasadas al componente
  const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const Titles = ({text}) => <h1>{text}</h1>;


  return (
    <div>
      <Titles text="give feedback" />

      {/* Componente Results */}
      <Results good={good} neutral={neutral} bad={bad} />

      {/* Botones para recopilar feedback */}
      <Button text="Good" handleClick={handleGoodClick} />
      <Button text="Neutral" handleClick={handleNeutralClick} />
      <Button text="Bad" handleClick={handleBadClick} />

      <Titles text="statistics" />
      {/* Renderiza Statistics solo cuando hay al menos un voto */}
      {good + neutral + bad > 0 && <Statistics good={good} neutral={neutral} bad={bad} />}
    </div>
  );
};

export default App;
ReactDOM.render(<App />, document.getElementById('root'));