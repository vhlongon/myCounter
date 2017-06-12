import {combineReducers} from 'redux';

const initialState = [
  {
    id: 0,
    value: 0
  }
];


//even though this reducer doesn't work, it should still not effect adding a counter
const reducer = (state = initialState, action) => { //doesn't work
  switch (action.type) {
    case 'INCREMENT':
      //return state.value + 1;
    case 'DECREMENT':
      //return state.value - 1;
    default:
      return state;
  }
}


const newCounterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'NEWCOUNTER':
      console.log("newCounterReducer triggered" + state); //works
      return [
        ...state,
        {
          id: action.id,
          value: 0
        }
      ]
    default:
      console.log(state, state.counters, state.counters[0].id); //is triggered 3 times at startup, returns 0 as id
      return state; //do nothing
  }
}

const allReducers = combineReducers({newCounterReducer, reducer});

export default allReducers;
