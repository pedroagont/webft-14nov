function CardListItem(props) {
  //   console.log(props);
  const { name } = props;

  return (
    <div className="card-list-item">
      <h2>{name}</h2>
      <p>Description</p>
    </div>
  );
}

export default CardListItem;
