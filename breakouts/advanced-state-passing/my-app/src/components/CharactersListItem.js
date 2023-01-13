function CharactersListItem(props) {
  const { char, clickHandler } = props;
  return (
    <li className="characters-list-item">
      <img src={char.image} alt={char.name} />
      <h4>{char.name}</h4>
      <p>{char.species}</p>
      <button onClick={() => clickHandler(char.name)}>Say hi!</button>
    </li>
  );
}

export default CharactersListItem;
