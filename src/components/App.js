import React from 'react';
import CounterContainer from '../containers/CounterContainer';
//import Counter from './Counter';

const App = ({
  counters={
  counterList:[
    {id: 494, value: 10},
  ]}, onNewToDo}) => (
  <div>
    <button onClick={onNewToDo}>Add Counter</button>
    {counters.counterList.map((counter, id) =>
      <CounterContainer key={id} />
    )}
    {/*or is it just supposed to render a counter*/}
  </div>
)

export default App;
