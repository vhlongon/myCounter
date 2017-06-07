import React from 'react';
let id = 0;
const Counter = ({ value, onIncrement, onDecrement}) => (
	<div className="counter">
		<h1>{value}</h1>
		<button onClick={() => {id++, onIncrement;}} id={id}>+</button>
		<button onClick={() => {id++, onDecrement;}} id={id}>-</button>
	</div>
)

export default Counter;
//check
console.log(id);
