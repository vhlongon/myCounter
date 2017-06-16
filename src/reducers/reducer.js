import {combineReducers} from 'redux';

const initialState = {
  counterList: [
    { id: 0, value: 0 }
  ]
}




/*
*inc dec and clear each have the same thing, return ...state, counterlist.map if
*counter.id etc, besides for what difference we return
*what if we used a function inside of the return (see line 29/30) since that is
*the only unique thing
*/





const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEWCOUNTER':
      return {
        ...state,
        counterList: [
          ...state.counterList,
          {id: state.counterList.length, value: 0}
         ]
       }
    case 'INCREMENT':
      return {
        ...state,
        counterList: state.counterList.map(counter => {
          if(counter.id === action.id) {
            return {
              ...counter,
              value: counter.value + 1
            }
          }
          else {
            return counter;
          }
        })
      };

    case 'DECREMENT':
      return {
        ...state,
        counterList: state.counterList.map(counter => {
          if(counter.id === action.id) {
            return {
              ...counter,
              value: counter.value - 1
            }
          }
          else {
            return counter;
          }
        })
      };

    case 'CLEAR':
      return {
        ...state,
        counterList: state.counterList.map(counter => {
          if(counter.id === action.id) {
            return {
              ...counter,
              value: 0
            }
          }
          else {
            return counter;
          }
        })
      }
      default:
        return state;
  }
}


const allReducers = combineReducers({
  counters: reducer//counters refers to the part of the state the reducer manages
});

export default allReducers;
