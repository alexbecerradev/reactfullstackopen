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
    const All = () => <p>all: {props.good + props.neutral + props.bad}</p>;
    const Average = () => (
      <p>average: {(props.good + props.neutral + props.bad) / 3}</p>
    );
    const Positive = () => (
      <p>positive: {(props.good / (props.good + props.neutral + props.bad)) * 100}%</p>
    );
  
    return (
      <div>
        <All />
        <Average />
        <Positive />
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
ReactDOM.render(<App />, document.getElementById('root'));