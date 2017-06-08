import React from 'react';

const Counter = ({onIncrement, onDecrement, id, value}) => (
	<div className="counter">
		<h1>{value}</h1>
		<button onClick={onIncrement(id)}>+</button> {/*dispatches action*/}
		<button onClick={onDecrement(id)}>-</button>
	</div>
)

export default Counter;
