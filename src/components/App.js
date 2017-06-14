import React from 'react';
import CounterContainer from '../containers/CounterContainer';
//import Counter from './Counter';

const App = ({counters, onNewToDo}) => (
  <div>
    <button onClick={onNewToDo}>Add Counter</button>
    {counters.counterList.map(counter =>
      <CounterContainer key={counter.id} id={counter.id} value={counter.value} />
    )}
    {/*or is it just supposed to render a counter*/}
  </div>
)

export default App;
