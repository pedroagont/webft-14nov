function Counter(props) {
  const { count, handleDecrement, handleIncrement } = props;

  return (
    <div>
      <h2>Page: {count}</h2>
      <button onClick={handleDecrement}>Prev</button>
      <button onClick={handleIncrement}>Next</button>
    </div>
  );
}

export default Counter;
