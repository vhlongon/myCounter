import {combineReducers} from 'redux';

const initialState = [{ id: 0,value: 0 }]


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state.map(counter => {
        if(counter.id === action.id) {
          return {
            ...counter,
            value: counter.value + 1
          }
        }
        else {
          return counter;
        }
      });

    case 'DECREMENT':
      return state.map(counter => {
        if(counter.id === action.id) {
          return {
            ...counter,
            value: counter.value - 1
          }
        }
        else {
          return counter;
        }
    });
    default:
      return state;
  }
}


const newCounterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'NEWCOUNTER':
     //tests
      for(var name in state) {
        console.log(name);
      }
      console.log("test" + [{},{}])
      console.log("newCounterReducer triggered" + state);
      //end of tests
      return [...state, { id: initialState.length++/*or just a number that incs*/, value: 0 }];
    default:
      console.log(state, state[0]);
      return state; //do nothing
  }
}

const allReducers = combineReducers({newCounterReducer, reducer});

export default allReducers;
