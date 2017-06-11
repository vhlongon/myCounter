import {combineReducers} from 'redux';

/*const initialState = {
  counters: [
    {
      id: 0,
      value: 0
    }
  ]
}*/

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state.value + 1; //or state + 1? or object.assign({},state, {value + 1})
    case 'DECREMENT':
      return state.value - 1; //or state - 1?
    default:
      return state;
  }
}


const newCounterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'NEWCOUNTER':
      return Object.assign({}, state, {
        counters: [
          ...state.counters,
          {
            id: action.id,
            value: 0
          }
        ]
      })
    default:
      return state; //do nothing
  }
}

const allReducers = combineReducers({newCounterReducer, reducer});

export default allReducers;
