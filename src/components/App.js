import React from 'react';

const App = ({Counters, addCounter, value}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={addCounter}>Add Counter</button>
  </div>
)

export default App;
