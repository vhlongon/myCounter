import React from 'react';

const App = ({ value, onIncrement, onDecrement}) => (
	<div className="counter">
		<h1>{value}</h1>
		<button onClick={onIncrement}>increment</button>
		<button onClick={onDecrement}>decrement</button>
	</div>
)

export default App;
