import {combineReducers} from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state.value + 1; //or state + 1? or object.assign({},state, {value + 1})
    case 'DECREMENT':
      return state.value - 1; //or state - 1?
    default:
      return state;
  }
}


const newToDoReducer = (state = {}, action) => {
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

const allReducers = combineReducers({newToDoReducer, reducer});

export default allReducers;
