import React from 'react';

const Counter = ({onIncrement, onDecrement, onClear, id, value}) => {
	let input = 0;
	return (
		<div className="counter">
			<h2>{value}</h2>
			<button onClick={() => onIncrement(id, 1)}>+</button>
			<button onClick={() => onDecrement(id, 1)}>-</button>
			<button onClick={() => onClear(id)}>clear</button>
			<form onSubmit={function(e) {
				e.preventDefault()
				//if()
        onIncrement(id, input.value)
        input.value = 0;
      }}>
        <input type="number"ref={node => { input = node }} />
        <input type="submit" />
				{
					/*
					  to change, add two inputs, one has a + and one has a -. So that
					  you don't have to create a crazy function or disobey DRY
				  */
				}
      </form>
	  </div>
  )
}


export default Counter;
