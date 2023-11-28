const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
    ]
  };

  const Header = ({ course }) => <h1>{course.name}</h1>;

  const Total = ({ course }) => (
    <p>Number of exercises {course.parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
  );

  return (
    <div>
      <Header course={course} />
      {/* Renderizar las partes si es necesario */}
      {course.parts.map((part, index) => (
        <p key={index}>{part.name} - {part.exercises} exercises</p>
      ))}
      <Total course={course} />
    </div>
  );
};
