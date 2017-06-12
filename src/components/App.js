import React from 'react';
import Counter from './Counter';
//let idCounter = 1;
const App = ({counters=[], onNewToDo}) => (
  <div>
    <button onClick={/*() => { */onNewToDo/*(idCounter); idCounter++;}*/}>Add Counter</button>
    {console.log(counters + "app rendered")}
    {counters.map(counter =>
      <Counter />
    )}

  </div>
)

export default App;
