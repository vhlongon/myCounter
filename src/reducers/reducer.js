import {combineReducers} from 'redux';

const initialState = {
  counterList: [

  ]
}

const updateObject = (object, newValues) => { //DRY DESTROYER 2!
  return Object.assign({}, object /* always state*/, newValues);
}

const updateItems = (array, itemId, updateFunction) => {
  //DRY DESTROYER!
  const updated = array.map(item => { //array is always CounterList
    if(item.id !== itemId) {
      return item;
    }
    return updateFunction(item); //this is the one we want to edit.
  });
  return updated; //this should now be the state.
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGOUT':
      return state = initialState; //reset state
    case 'NEWCOUNTER':
      return {
        ...state,
        counterList: [
          ...state.counterList,
          {
            id: (Math.random() * (0.120 - 0.0200) + 0.0200).toFixed(10), //random ten digit number.
            value: 0,
            active: true //render it
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
  counters: reducer //state.counters.counterList instead of state.reducer.counterList
})

export default allReducers;
