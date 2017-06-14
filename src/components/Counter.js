import React from 'react';

const Counter = ({onIncrement, onDecrement, id, value}) => ( //stateless functional component
	<div className="counter">
		<h1>{value}</h1> {/*value of that counter, will use state.counter(from id).value*/}
		<button onClick={() => onIncrement(id)}>+</button> {/*dispatches action*/}
		<button onClick={() => onDecrement(id)}>-</button> {/*^*/}
	</div>
)

export default Counter; //
