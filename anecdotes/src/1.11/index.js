import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Results = (props) => (
  <table>
    <tbody>
      <tr>
        <td>Good</td>
        <td>{props.good}</td>
      </tr>
      <tr>
        <td>Neutral</td>
        <td>{props.neutral}</td>
      </tr>
      <tr>
        <td>Bad</td>
        <td>{props.bad}</td>
      </tr>
    </tbody>
  </table>
  );

  const Statistics = (props) => {
    const { good, neutral, bad } = props;
    const total = good + neutral + bad;
  
    if (total === 0) {
      return <p>No feedback given yet.</p>;
    }
  
    return (
      <table>
      <tbody>
        <tr>
          <td>All: {total}</td>
        </tr>
        <tr>
          <td>Average: {(good - bad) / total}</td>
        </tr>
        <tr>
          <td>Positive: {(good / total) * 100}%</td>
        </tr>
      </tbody>
    </table>
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
      
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad - 1)}>Bad</button>

      <Titles text="statistics"/>
      <Results good={good} neutral={neutral} bad={bad} />
      {/* Renderiza Statistics solo cuando hay al menos un voto */}
      {good + neutral + bad > 0 && <Statistics good={good} neutral={neutral} bad={bad} />}
    </div>
  );
};

export default App;
ReactDOM.render(<App />, document.getElementById('root'));