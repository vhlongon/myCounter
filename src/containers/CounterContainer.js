import { connect } from 'react-redux';
import Counter from '../components/Counter';

  //gives component function on how to dispatch.
  const mapDispatchToProps = (dispatch) => {
  	return {
      onIncrement: (id) => dispatch({type: 'INCREMENT', id}),
      onDecrement: (id) => dispatch({type: 'DECREMENT', id}),
      onClear: (id) => dispatch({type: 'CLEAR', id})
    }
  }

const CounterContainer = connect(null, mapDispatchToProps)(Counter);

export default CounterContainer;
