import { useState, useEffect } from 'react';

const initial = [{ name: 'Luke' }, { name: 'Chewbacca' }, { name: 'R2D2' }];

function useAppData() {
  const [results, setResults] = useState(initial);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then((res) => res.json())
      .then((data) => setResults(data.results));
  }, []);

  return { results };
}

export default useAppData;
