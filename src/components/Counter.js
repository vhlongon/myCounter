import React from 'react';



const Counter = ({onIncrement, onDecrement, onClear, id, value}) => {
	return (
		<div className="counter">
			<h2>{value}</h2>
			<button onClick={() => onIncrement(id)}>+</button>
			<button onClick={() => onDecrement(id)}>-</button>
			<button onClick={() => onClear(id)}>clear</button>
	  </div>
  )
}


export default Counter;
