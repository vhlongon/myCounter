import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
  	value: state
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onNewToDo: () => dispatch({type: 'NEWTODO'})
  }
}
const AppContainer = connect(mapStateToProps, mapDispatchToProps)

export default AppContainer;
