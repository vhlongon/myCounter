import {combineReducers} from 'redux';
//next feature, h1 stating total of all
const initialState = {
  counterList: [
    
  ]
}
//easy to understand
const updateObject = (object, newValues) => { //DRY DESTROYER 2!
  return Object.assign({}, object /* = state*/, newValues/*example: value: 0*/);
}

const updateItems = (array, itemId, updateFunction) => {
  //DRY DESTROYER!
  const updated = array.map(item => { //array is counterList always
    if(item.id !== itemId) {
      return item; //change nothing if its not the counter The reducer wants to edit.
    }
    return updateFunction(item);
  });
  return updated;
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGOUT':
      return state = initialState;
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
        /*
        * should we make function to automate the function that we meant to automate something,
        * it could automatically do everything but
        */
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
