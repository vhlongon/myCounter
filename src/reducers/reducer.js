import {combineReducers} from 'redux';
//next feature, h1 stating total of all
const initialState = {
  counterList: [
    { id: 0, value: 0 }
  ]
}
//easy to understand
const updateObject = (object, newValues) => {
  return Object.assign({}, object /*state*/, newValues/*value: 0*/);
}

const updateItems = (array, itemId, updateFunction) => {
  const updated = array.map(item => { //array is counterList
    if(item.id !== itemId) {
      return item; //change nothing if its not the counter to edit
    }
    const updated = updateFunction(item);
    /* example updateFunction:
      (counter) => {  //item is counter
        return object.assign({}, counter, {value: counter.value + 1})
      })
    */
    return updated //do this so the state is now updated
  });
  return updated;
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
      const updatedCounterList = updateItems(state.counterList, action.id, counter => {
        return updateObject(counter, {value: counter.value + parseInt(action.value, 10)})
      })
      return {counterList: updatedCounterList}

    case 'DECREMENT':
      const updatedCounterList2 = updateItems(state.counterList, action.id, counter => {
        return updateObject(counter, {value: counter.value - parseInt(action.value, 10)})
      })
      return {counterList: updatedCounterList2};

    case 'CLEAR':
      const updatedCounterList3 = updateItems(state.counterList, action.id, counter => {
        return updateObject(counter, {value: 0})
      })
      return {counterList : updatedCounterList3};

    default:
      return state;
  }
}
/*
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
*/


const allReducers = combineReducers({
  counters: reducer
})

export default allReducers;
