import React from 'react';
//sadly since I am not continuing from the todo example, I am unable to make cringy puns :P
//example: dispatch(addTodo) //You must dispatch so the reducer knows what TODO
const Counter = ({onIncrement, onDecrement, onClear, onDelete, id, value}) => {
  let input;
	return (
		<div className="counter">
			<h2>{value}</h2>
			<button onClick={() => onIncrement(id, 1)}>+</button>
			<button onClick={() => onDecrement(id, 1)}>-</button>
			<button onClick={() => onClear(id)}>clear</button>
			<button onClick={() => onDelete(id)}>Delete</button>
			<form onSubmit={function(e) {
				e.preventDefault()
        input.value = 0;
      }}>
        <input type="number"ref={node => { input = node }} />
        <input type="submit" value="increment" onClick={() => {return onIncrement(id, input.value)}}/>
				<input type="submit" value="decrement" onClick={() => {return onDecrement(id, input.value)}}/>
      </form>
	  </div>
  )
}


export default Counter;
