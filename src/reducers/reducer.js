import {combineReducers} from 'redux';
//next feature, h1 stating total of all
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
          {
            id: state.counterList.length,
            value: 0
          }
        ]
       }
    case 'INCREMENT':
      return {
        ...state,
        counterList: state.counterList.map(counter => {
          if(counter.id === action.id) {
            return {
              ...counter,
              value: counter.value + parseInt(action.value, 10)
            }
          }
          else {
            return counter;
          }
        })
      }

    case 'DECREMENT':
      return {
        ...state,
        counterList: state.counterList.map(counter => {
          if(counter.id === action.id) {
            return {
              ...counter,
              value: counter.value - parseInt(action.value, 10)
            }
          }
          else {
            return counter;
          }
        })
      }
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
  counters: reducer
})

export default allReducers;
