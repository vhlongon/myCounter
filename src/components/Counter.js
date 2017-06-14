import React from 'react';

const Counter = ({onIncrement, onDecrement, key, value}) => ( //stateless functional component
	<div className="counter">
		<h1>{value}</h1> {/*value of that counter, will use state.counter(from id).value*/}
		<button onClick={() => onIncrement(key)}>+</button> {/*dispatches action*/}
		<button onClick={() => onDecrement(key)}>-</button> {/*^*/}
	</div>
)

export default Counter; //
