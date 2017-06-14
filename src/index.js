import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers/reducer'; //must include full path i guess
import AppContainer from './containers/AppContainer';

const store = createStore(
   allReducers, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('root')
);
