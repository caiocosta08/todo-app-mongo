import { call, put, takeEvery, takeLatest  } from 'redux-saga/effects';
import * as UsersAPI from '../controllers/users';
import * as TasksAPI from '../controllers/tasks';
import * as StatusesAPI from '../controllers/statuses';
import * as ScopesAPI from '../controllers/scopes';
import * as CategoriesAPI from '../controllers/categories';

function* fetchUsers(action){
    try {
        const users = yield call(UsersAPI.getAll);
        yield put({type: "USERS_FETCH_ALL_SUCCESS", users: users})
    } catch (error) {
        yield put({type: "USERS_FETCH_ALL_FAILED", users: [] })
    }
}

function* fetchAllData(action){
    try {
        const users = yield call(UsersAPI.getAll);
        const tasks = yield call(TasksAPI.getAll);
        const statuses = yield call(StatusesAPI.getAll);
        const scopes = yield call(ScopesAPI.getAll);
        const categories = yield call(CategoriesAPI.getAll);
        yield put({
            type: 'GET_ALL_DATA_SUCCESS',
            users: users,
            tasks: tasks,
            statuses: statuses,
            scopes: scopes,
            categories: categories
        });
    } catch (error) {
        
    }
}

export default function* rootSaga(){
    //yield takeEvery("USERS_FETCH_REQUESTED", fetchUsers)
    yield takeLatest("USERS_FETCH_REQUESTED", fetchUsers);
    yield takeLatest('GET_ALL_DATA', fetchAllData);
}

//export default rootSaga;