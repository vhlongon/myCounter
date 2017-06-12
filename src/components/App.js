import React from 'react';
import Counter from './Counter';
//let idCounter = 1;
const App = ({counters=[{id: 494, value: 10}], onNewToDo}) => (
  <div>
    <button onClick={onNewToDo}>Add Counter</button>
    {console.log(counters + "app rendered")}
    {counters.map(counter =>
      <Counter />
    )}

  </div>
)

export default App;
