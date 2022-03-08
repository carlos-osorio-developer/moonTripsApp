import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer from './slices/rocketSlice';
import missionReducer from './slices/missionSlice';

const reducer = combineReducers({
  rockets: rocketReducer,
  missions: missionReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
