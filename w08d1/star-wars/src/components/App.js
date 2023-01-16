import React from 'react';
import CardList from './CardList';
import useAppData from '../hooks/useAppData';
import '../styles/App.css';

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
