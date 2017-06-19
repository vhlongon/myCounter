import React from 'react';
import CounterContainer from '../containers/CounterContainer';
//import Counter from './Counter';

const App = ({counters, onNewToDo, allValue}) => (
  <div>
    <h1>{allValue}</h1>
    <button onClick={onNewToDo}>Add Counter</button>
    {
      counters.counterList.map(counter => { //fix end return later
        if(counter.active) {
          return (<CounterContainer key={counter.id} id={counter.id} value={counter.value} />)
        }
        return null;
      })
    }
  </div>
)
export default App;
