import {combineReducers} from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

let nextId = 0;
const newToDoReducer = (state = {}, action) => {
  switch(action.type) {
    case 'NEWCOUNTER':
      return Object.assign({}, state, {
        id: nextId,
        count: 0
        //hopefully creates new object inside of object.
      })
    default:
      return state; //do nothing
  }
}

const allReducers = combineReducers({newToDoReducer, reducer});

export default allReducers;
