import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rocketReducer from './slices/rocketSlice';
import missionReducer from './slices/missionSlice';

const reducer = combineReducers({
  rocket: rocketReducer,
  mission: missionReducer,
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
