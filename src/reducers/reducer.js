const reducer = (state = 0, action) => { //duh...
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
} //hi

export default reducer;
