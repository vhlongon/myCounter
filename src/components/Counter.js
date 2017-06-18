import React from 'react';



const Counter = ({onIncrement, onDecrement, onClear, id, value}) => (
	<div className="counter">
		<h2>{value}</h2>
		<button onClick={() => onIncrement(id)}>+</button>
		<button onClick={() => onDecrement(id)}>-</button>
		<button onClick={() => onClear(id)}>clear</button>
		{
		/*
		two of these for incrementing and decrementing
		<form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          onIncrement(id, input.value)
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
			*/
		}
  </div>
)


export default Counter;
