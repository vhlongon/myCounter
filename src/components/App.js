import React from 'react';
import Counter from './Counter';
const App = ({counters=[], onNewToDo}) => (
  <div>
    <button onClick={onNewToDo}>Add Counter</button>
    {counters.map(counter =>
      <Counter />
    )}

  </div>
)

export default App;
