import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(1);
  const [results, setResults] = useState([]);

  const handleDecrement = () => count > 1 && setCount(count - 1);
  const handleIncrement = () => setCount(count + 1);

  useEffect(() => {
    document.title = `Rick and Morty Page: ${count}`;
  }, [count]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${count}`)
      .then((res) => res.json())
      .then((data) => setResults(data.results))
      .catch((err) => console.log(err));
  }, [count]);

  return (
    <div>
      <h1>Rick and Morty Characters!</h1>
      <h2>Page: {count}</h2>
      <button onClick={handleDecrement}>Prev</button>
      <button onClick={handleIncrement}>Next</button>
      <br />
      <ul>
        {results.map((char) => (
          <li key={char.id}>
            <img width="100px" src={char.image} alt={char.name} />
            <h4>{char.name}</h4>
            <p>{char.species}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
