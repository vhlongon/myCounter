import {connect} from 'react-redux';
import App from '../components/App';
const count = 0;
const mapStateToProps = (state) => ({
  counters: state.counters,
  allValue: state.counters.counterList.map(counter => {
    return count + counter.value
  })
})


const mapDispatchToProps = (dispatch) => ({
  onNewToDo: () => dispatch({type: 'NEWCOUNTER'}) //say to add a new todo, and use the id of the new todo
})

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
//final container
export default AppContainer;
