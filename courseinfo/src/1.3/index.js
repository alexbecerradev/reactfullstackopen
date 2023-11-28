import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14
  };

  const Header = ({ course }) => <h1>{course}</h1>;
  const Total = ({ parts }) => (
    <p>Number of exercises {parts.part1.exercises + parts.part2.exercises + parts.part3.exercises}</p>
  );
  const Part = ({ part }) => <p>{part.name} - {part.exercises} exercises</p>;

  return (
    <div>
      <Header course={course}/>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
      <Total parts={{ part1, part2, part3 }} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
