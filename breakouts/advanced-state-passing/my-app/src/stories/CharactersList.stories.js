import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CharactersList from '../components/CharactersList';

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

storiesOf('CharactersList', module)
  .add('Initial', () => (
    <CharactersList results={[]} clickHandler={action('clickHandler')} />
  ))
  .add('Populated', () => (
    <CharactersList results={results} clickHandler={action('clickHandler')} />
  ));
