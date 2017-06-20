import React from 'react';
import CounterContainer from '../containers/CounterContainer';


const App = ({counters, onNewToDo, allValue, logOut}) => (
  <div>
    <button onClick={logOut}><b>log out</b></button>
    <h1>{allValue}</h1>
    <button onClick={onNewToDo}>Add Counter</button>
    {
      counters.counterList.map(counter => {
        if(counter.active) {
          return (<CounterContainer key={counter.id} id={counter.id} value={counter.value} />)
        } //must pass key to every component/container
        return null; //dont render anything.
      })
    }
  </div>
)
export default App;
