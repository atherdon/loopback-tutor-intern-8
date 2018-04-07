import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/*
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AllReducers from './Reducers';

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();

*/

//const store = createStore(AllReducers);

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();

