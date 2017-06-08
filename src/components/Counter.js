import React from 'react';

const Counter = ({onIncrement, onDecrement, id}) => (
	<div className="counter">
		<button onClick={onIncrement(id)}>+</button> {/*dispatches action*/}
		<button onClick={onDecrement(id)}>-</button>
	</div>
)

export default Counter;
