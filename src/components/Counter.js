import React from 'react';

const Counter = ({ value, onIncrement, onDecrement}) => (
	<div className="counter">
		<h1>{value}</h1>
		<button onClick={onIncrement}>+</button>
		<button onClick={onDecrement}>-</button>
	</div>
)

export default Counter;
//check
