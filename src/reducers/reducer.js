import {combineReducers} from 'redux';

const initialState = {
  counters: [
    {
      id: 0,
      value: 0
    }
  ]
}

//even though this reducer doesn't work, it should still not effect adding a todo
const reducer = (state = initialState, action) => { //doesn't work
  switch (action.type) {
    case 'INCREMENT':
      return state.value + 1;  //but there is more than 1 counter
    case 'DECREMENT':
      return state.value - 1;
    default:
      return state;
  }
}


const newCounterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'NEWCOUNTER':
      console.log("newCounterReducer triggered" + state); //works
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
      console.log("newCounterReducer default triggered"); //is triggered 3 times at startup
      return state; //do nothing
  }
}

const allReducers = combineReducers({newCounterReducer, reducer});

export default allReducers;
