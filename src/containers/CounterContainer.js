import { connect } from 'react-redux';
import Counter from '../components/Counter';
//gives you component the redux state.

//gives component function on how to dispatch.
const mapDispatchToProps = (dispatch) => {
	return {
		onIncrement: (id) => dispatch({type: 'INCREMENT', id}), //gives function to components.
		onDecrement: (id) => dispatch({type: 'DECREMENT', id}) //^
	}
}

const CounterContainer = connect(null, mapDispatchToProps)(Counter); //each counter doesnt care about redux state.
//react-redux automatically makes a container, this is the cool-kid way

export default CounterContainer;
