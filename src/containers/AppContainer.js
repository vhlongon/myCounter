import {connect} from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => ({
  counters: state.counters
})


const mapDispatchToProps = (dispatch) => ({
  onNewToDo: () => dispatch({type: 'NEWCOUNTER'}) 
})

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
//final container
export default AppContainer;
