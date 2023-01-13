import CharactersListItem from './CharactersListItem';

function CharactersList(props) {
  const { results, clickHandler } = props;

  return (
    <ul className="characters-list">
      {results.length > 0
        ? results.map((char) => (
            <CharactersListItem
              key={char.id}
              char={char}
              clickHandler={clickHandler}
            />
          ))
        : 'Characters loading...'}
    </ul>
  );
}

export default CharactersList;
