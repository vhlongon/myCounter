import {combineReducers} from 'redux';

const reducer = (state = 0, action) => { //duh...
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}


const newToDoReducer = (state = {}, action) => {
  switch(action.type) {
    case 'NEWTODO':
      return state; //figure out
    default:
      return state; //do nothing
  }
}

const allReducers = combineReducers(newToDoReducer, reducer);

export default allReducers;
