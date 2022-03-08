import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import bookReducer from './slices/rocketSlice';

const reducer = combineReducers({
  book: bookReducer,
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
