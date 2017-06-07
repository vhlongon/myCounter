import React from 'react';
let id = 0;
const Counter = ({onIncrement, onDecrement}) => (
	<div className="counter">
		<button onClick={() => {id++, onIncrement;}} id={id}>+</button>
		<button onClick={() => {id++, onDecrement;}} id={id}>-</button>
	</div>
)

export default Counter;
//check
console.log(id);
