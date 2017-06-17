import {combineReducers} from 'redux';

const initialState = {
  counterList: [
    { id: 0, value: 0 }
  ]
}


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
      default:
        return state;
  }
}


const allReducers = combineReducers({
  counters: reducer
});

export default allReducers;
