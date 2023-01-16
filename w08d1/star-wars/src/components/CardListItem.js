function CardListItem(props) {
  //   console.log(props);
  const { name, birth_year } = props;

  return (
    <div className="card-list-item">
      <h2>{name}</h2>
      <p>{birth_year}</p>
    </div>
  );
}

export default CardListItem;
