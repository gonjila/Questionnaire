import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import informationReducer from './reducers/answers-reducer';

const middlewares = [logger];

const reduxStore = createStore(informationReducer, applyMiddleware(...middlewares));

export default reduxStore;
