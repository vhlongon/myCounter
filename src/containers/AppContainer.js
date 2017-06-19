import {connect} from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => ({
  counters: state.counters,
  allValue: state.counters.counterList.reduce((value, counter) => value + counter.value, 0)
})

const mapDispatchToProps = (dispatch) => ({
  onNewToDo: () => dispatch({type: 'NEWCOUNTER'}),
  logOut: () => dispatch({type:'LOGOUT'})
})

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
//final container
export default AppContainer;
