import { useState, useEffect } from 'react';
import Counter from './Counter';
import CharactersList from './CharactersList';

import '../styles/App.css';

function App() {
  const [count, setCount] = useState(1);
  const [results, setResults] = useState([]);

  const handleDecrement = () => count > 1 && setCount(count - 1);
  const handleIncrement = () => setCount(count + 1);

  const clickHandler = (name) => alert(`${name} says hi!`);

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
      <Counter
        count={count}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />
      <CharactersList results={results} clickHandler={clickHandler} />
    </div>
  );
}

export default App;
