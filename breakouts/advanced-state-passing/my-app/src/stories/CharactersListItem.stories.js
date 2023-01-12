import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CharactersListItem from '../components/CharactersListItem';

const results = [
  {
    id: 1,
    name: 'Rick Sanchez',
    species: 'Human',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    id: 2,
    name: 'Morty Smith',
    species: 'Human',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },
  {
    id: 3,
    name: 'Summer Smith',
    species: 'Human',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
  },
];

storiesOf('CharactersListItem', module)
  .add('Rick Sanchez', () => <CharactersListItem char={results[0]} />)
  .add('Morty Smith', () => <CharactersListItem char={results[1]} />)
  .add('Summer Smith', () => <CharactersListItem char={results[2]} />);
