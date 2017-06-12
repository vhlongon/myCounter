import {connect} from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => ({
  counters: state.cosfljs//...still works same as counters: state.counters
})


const mapDispatchToProps = (dispatch, id) => ({
  onNewToDo: (id) => dispatch({type: 'NEWCOUNTER', id: id}) //say to add a new todo, and use the id of the new todo
})

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
//final container
export default AppContainer;
