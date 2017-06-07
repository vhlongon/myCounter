import React from 'react';

const Counter = ({onIncrement, onDecrement}) => (
	<div className="counter">
		<button onClick={onIncrement}>+</button>
		<button onClick={onDecrement}>-</button>
	</div>
)

export default Counter;
