import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, hashHistory } from 'react-router';
import routes from './Route';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

document.addEventListener('DOMContentLoaded', () => {
	if (Notification.permission !== "granted")
    Notification.requestPermission();

	ReactDOM.render( 
			<Provider store={store}>
				<Router history={hashHistory} routes={routes} />
			</Provider>, document.getElementById('app'))
});
