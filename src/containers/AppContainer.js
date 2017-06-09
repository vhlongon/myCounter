import {connect} from 'react-redux';
import App from '../components/App';
const mapStateToProps = (state) => ({
  counters: state.counters //counters is all the counters in the state
})


const mapDispatchToProps = (dispatch) => ({
  onNewToDo: (newId) => dispatch({type: 'NEWTODO', newId}) //say to add a new todo, and use the id of the new todo
})

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
//final container
export default AppContainer;
