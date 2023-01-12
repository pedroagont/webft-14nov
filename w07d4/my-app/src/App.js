import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  useEffect(() => {
    document.title = `Counter: ${count}`;
  }, [count]);

  useEffect(() => {
    console.log(`Counter: ${count}`);
  }, [count]);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default App;
