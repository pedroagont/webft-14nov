function CharactersListItem(props) {
  const { char, clickHandler } = props;
  return (
    <li onClick={clickHandler}>
      <img width="100px" src={char.image} alt={char.name} />
      <h4>{char.name}</h4>
      <p>{char.species}</p>
    </li>
  );
}

export default CharactersListItem;
