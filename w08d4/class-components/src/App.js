import HelloFunction from './HelloFunction';
import HelloClass from './HelloClass';
import Counter from './Counter';
import ShibaImg from './ShibaImg';

import './App.css';

function App() {
  return (
    <>
      <h1>Hello!</h1>
      <HelloFunction name="Scott" />
      <HelloClass name="Eric" />
      <Counter count={100} />
      <ShibaImg src="https://media.tenor.com/FawYo00tBekAAAAC/loading-thinking.gif" />
    </>
  );
}

export default App;
