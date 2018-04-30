import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
//import { unregister } from './registerServiceWorker';
import registerServiceWorker from './registerServiceWorker';
// import Raven from 'raven-js';
// import { sentry_url } from './ravenconfig';

//Raven.config(sentry_url).install();


ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
///unregister();
