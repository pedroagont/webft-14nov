import CardListItem from './CardListItem';

function CardList(props) {
  return (
    <div className="card-list">
      <CardListItem name="Luke Skywalker" />
      <CardListItem name="Chewbacca" />
      <CardListItem name="R2D2" />
    </div>
  );
}

export default CardList;
