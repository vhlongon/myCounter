import React from 'react';

const App = ({counters, onNewToDo}) => (
  <div>
    <button onClick={onNewToDo}>Add Counter</button>
  {/*counters are not yet being displayed*/}
  </div>
)

export default App;
