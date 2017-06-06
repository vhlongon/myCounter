import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer'; //must include full path i guess
import Final from './containers/container';

const store = createStore(reducer);

render(
	<Provider store={store}> 
		<Final />
	</Provider>,
	document.getElementById('root')
);
