import React from 'react';
import useAppData from './useAppData';

import CardList from './CardList';
import './App.css';

function App() {
  const { results } = useAppData();
  return (
    <>
      <h1>Hello from App! 👋</h1>
      <CardList results={results} />
    </>
  );
}

export default App;
