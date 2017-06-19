import {combineReducers} from 'redux';
//next feature, h1 stating total of all
const initialState = {
  counterList: [
    { id: 0, value: 0, active: true }
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
    return updateFunction(item);
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
            id: (Math.random() * (0.120 - 0.0200) + 0.0200).toFixed(10),
            value: 0,
            active: true
          }
        ]
       }
    case 'INCREMENT':
      return {
        counterList: updateItems(state.counterList, action.id, (counter) => {
          return updateObject(counter, {value: counter.value + parseInt(action.value, 10)})
        })
      }

    case 'DECREMENT':
      return {
        counterList: updateItems(state.counterList, action.id, (counter) => {
          return updateObject(counter, {value: counter.value - parseInt(action.value, 10)})
        })
      }

    case 'CLEAR':
     return {
      counterList: updateItems(state.counterList, action.id, (counter) => {
        return updateObject(counter, {value: 0})
      })
    }

    case 'DELETE':
      return {
        counterList: updateItems(state.counterList, action.id, (counter) => {
          return updateObject(counter, {active: false, value: 0})//value must be 0 cause of h1
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
