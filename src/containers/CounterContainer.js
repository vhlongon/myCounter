import { connect } from 'react-redux';
import App from '../components/App';
//gives you component the redux state.

//gives component function on how to dispatch.
const mapDispatchToProps = (dispatch) => {
	return {
		onIncrement: (id) => dispatch({type: 'INCREMENT', id}),
		onDecrement: (id) => dispatch({type: 'DECREMENT', id})
	}
}

const CounterContainer = connect(null, mapDispatchToProps)(App);
//react-redux automatically makes a container, this is the cool-kid way

export default CounterContainer;
