import { clickReducer } from './clickReducer';
import { combineReducers } from 'redux';
import { loadReducer } from './loadReducer';
import { modalsReducer } from './modalsReducer';

export const Reducers = combineReducers({
    clickState: clickReducer,
    loadState: loadReducer,
    modalsState: modalsReducer
});