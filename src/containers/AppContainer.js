const mapStateToProps = (state) => {
  return {
  	value: state
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onNewToDo: () => dispatch({type: 'newToDo'})
  }
}
const appContainer
export default AppContainer;
