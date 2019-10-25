import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Reducers } from '../reducers';
import rootSaga from './sagas';

//create saga middleware
const sagaMiddleware = createSagaMiddleware();
//mount it on the store
const Store = createStore(Reducers, applyMiddleware(sagaMiddleware));

//then run the saga
sagaMiddleware.run(rootSaga);

export default Store;