import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
  	value: state,
    counters: state.counters
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onNewToDo: (id) => dispatch({type: 'NEWTODO', id})
  }
}
const AppContainer = connect(mapStateToProps, mapDispatchToProps)
//final container
export default AppContainer;
