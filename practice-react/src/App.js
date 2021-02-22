// https://reactjs.org/docs/hooks-intro.html
import React, { useState, useEffect } from 'react';

const App = () => {
  // Destructurin assignment https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  // useState allows us to have state in functional components
  const [date, setDate] = useState(new Date());
  // useEffect will run when the component mounts (componentDidMount) or whenenever a value in its array of dependencies [] change (componentDidUpdat), the return in the callback function will be executed when the component will unmount (componentWillUnmount)
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleString()}</h2>
    </div>
  );
};

export default App;
