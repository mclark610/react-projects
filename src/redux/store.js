import {configureStore} from '@reduxjs/toolkit';

import thunk from 'redux-thunk'
import logger from '../middleware/logger'

import reducer from './reducers/'

export default configureStore( {
  reducer: reducer,
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(logger) 
  )
});


/*
const store = createStore(reducer, composeEnhancers(
  middleware
));
*/
