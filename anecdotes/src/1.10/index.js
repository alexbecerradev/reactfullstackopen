import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Results = (props) => (
  <div>
    <p>Good: {props.good}</p>
    <p>Neutral: {props.neutral}</p>
    <p>Bad: {props.bad}</p>
  </div>
  );

  const Statistics = (props) => {
    const { good, neutral, bad } = props;
    const total = good + neutral + bad;
  
    if (total === 0) {
      return <p>No feedback given yet.</p>;
    }
  
    return (
      <div>
        <p>All: {total}</p>
        <p>Average: {(good - bad) / total}</p>
        <p>Positive: {(good / total) * 100}%</p>
      </div>
    );
  };
  // Implementación de Statistics
  // Puedes utilizar las props pasadas al componente
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const Titles = ({text}) => <h1>{text}</h1>;


  return (
    <div>
      <Titles text="give feedback"/>
      
      {/* Componente Statistics */}
      <Results good={good} neutral={neutral} bad={bad} />

      {/* Botones para recopilar feedback */}
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad - 1)}>Bad</button>

      <Titles text="statistics"/>
      {/* Renderiza Statistics solo cuando hay al menos un voto */}
      {good + neutral + bad > 0 && <Statistics good={good} neutral={neutral} bad={bad} />}
    </div>
  );
};

export default App;
ReactDOM.render(<App />, document.getElementById('root'));