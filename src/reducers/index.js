import { clickReducer } from './clickReducer';
import { combineReducers } from 'redux';
import { loadReducer } from './loadReducer';

export const Reducers = combineReducers({
    clickState: clickReducer,
    loadState: loadReducer,
});