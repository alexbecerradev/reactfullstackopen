import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];

  const Header = ({ course }) => <h1>{course}</h1>;
  const Total = ({ parts }) => (
    <p>Number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
  );
  const Content = ({ parts }) => (
    <div>
      {parts.map((part, index) => (
        <p key={index}>{part.name} - {part.exercises} exercises</p>
      ))}
    </div>
  );

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
