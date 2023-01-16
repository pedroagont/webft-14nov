import CardListItem from './CardListItem';

function CardList(props) {
  const { results } = props;
  return (
    <div className="card-list">
      {results.map((item) => (
        <CardListItem
          key={item.name}
          name={item.name}
          birth_year={item.birth_year}
        />
      ))}
    </div>
  );
}

export default CardList;
