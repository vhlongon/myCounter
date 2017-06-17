import React from 'react';



const Counter = ({onIncrement, onDecrement, onClear, id, value}) => (
	<div className="counter">
		<h1>{value}</h1>
		<button onClick={() => onIncrement(id)}>+</button>
		<button onClick={() => onDecrement(id)}>-</button>
		<button onClick={() => onClear(id)}>clear</button>
  </div>
)

export default Counter;
