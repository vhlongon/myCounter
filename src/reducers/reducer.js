import {combineReducers} from 'redux';

const initialState = [{ id: 0,value: 0 }]



const reducer = (state = initialState, action) => {  //finally a new object is being added!
  switch (action.type) {
    case 'INCREMENT':
      return state.map(counter => {
        if(counter.id !== action.id) {
          return counter;
        }
        return { //hopefully returns new object INSIDE of one array.
          ...counter,
          value: counter.value - 1
        }
      });
    case 'DECREMENT':
      return state.map(counter => {
        if(counter.id !== action.id) {
          return counter;
        }
        return {
          ...counter,
          value: counter.value - 1
        }
    });
    default:
      return state;
  }
}


const newCounterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'NEWCOUNTER':
      for(var name in state) {
        console.log(name);
      }
      console.log("test" + [{},{}])
      console.log("newCounterReducer triggered" + state);
      return [
        ...state,
        {
          id: action.id,
          value: 0
        }
      ]
    default:
      console.log(state, state[0]); //is triggered 3 times at startup, returns 0 as id
      return state; //do nothing
  }
}

const allReducers = combineReducers({newCounterReducer, reducer});

export default allReducers;
