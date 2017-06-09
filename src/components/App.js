import React from 'react';

const App = ({counters, onNewToDo}) => (
  <div>
    <button onClick={onNewToDo}>Add Counter</button>
  {/*counters are not yet being displayed, fix this!, probably by using counters.map*/}
  </div>
)

export default App;
