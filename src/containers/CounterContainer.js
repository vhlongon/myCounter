import { connect } from 'react-redux';
import App from '../components/App';
//gives you component the redux state.

//gives component function on how to dispatch.
function mapDispatchToProps(dispatch) {
	return {
		onIncrement: () => dispatch({type: 'INCREMENT'}),
		onDecrement: () => dispatch({type: 'DECREMENT'})
	};
}

const CounterContainer = connect(null, mapDispatchToProps)(App);
//react-redux automatically makes a container, this is the cool-kid way.

export default CounterContainer;
