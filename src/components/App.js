import React from 'react';
import CounterContainer from '../containers/CounterContainer';
//import Counter from './Counter';
//let idCounter = 1;
const App = ({counters=[{id: 494, value: 10}], onNewToDo}) => (
  <div>
    <button onClick={onNewToDo}>Add Counter</button>
    {console.log(counters + "app rendered")}
    {counters.map(counter =>
      <CounterContainer />
    )}
    {/*or is it just supposed to render a counter*/}
  </div>
)

export default App;
