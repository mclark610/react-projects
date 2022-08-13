import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { render } from 'react-dom'; 

// Redux
import store from './redux/store.js';
/*
import middleware from './middleware/'
import reducer from './reducers/'
*/

import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root')); 

root.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
);

//const root = createRoot(container);

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
*/
/*
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
*/
// development mode.  this setup uses chrome redux devtool extension
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  /*
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
  */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
