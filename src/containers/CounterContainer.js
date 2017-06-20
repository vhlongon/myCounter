import { connect } from 'react-redux';
import Counter from '../components/Counter';

  const mapDispatchToProps = (dispatch) => {
  	return {
      onIncrement: (id, value) => dispatch({type: 'INCREMENT', id, value}),
      onDecrement: (id, value) => dispatch({type: 'DECREMENT', id, value}),
      onClear: (id) => dispatch({type: 'CLEAR', id}),
      onDelete: (id) => dispatch({type: 'DELETE', id})
    }
  }

const CounterContainer = connect(null, mapDispatchToProps)(Counter);

export default CounterContainer;
