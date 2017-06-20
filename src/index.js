import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers/reducer'; //must include full path.
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
/*
  FEATURE todo LIST:


  add some CSS, or SASS, or SCSS. Not bootstrap please.

  feature to fight another bot, whose counter is on the right, it would start off slow and every
  click the code interval - 10(miliseconds) or something like that, if the counter gets more than
  you, you lose. But thats more advanced. I think that would need its own reducer. Maybe I could
  get my feet wet with higher order components with this. As there are two counters. But one has
  interval and the other has human interaction.
*/
