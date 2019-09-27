import { 
    SET_CATEGORIES_DATA, 
    SET_SCOPES_DATA,
    TOGGLE_ACTIVE_CATEGORY,
    SET_ALL_DATA,
    USERS_FETCH_ALL_SUCCESS,
    USERS_FETCH_FAILED,
    USERS_FETCH_REQUESTED,
    GET_ALL_DATA,
    GET_ALL_DATA_SUCCESS
} from '../actions/actionTypes';
import * as scopesController from '../controllers/scopes';

const INITIAL_STATE = {
    categoryActive: null,
    categories: [],
    scopes: [],
    statuses: [],
    users: [],
    tasks: [],
}



export const loadReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){

        case TOGGLE_ACTIVE_CATEGORY:
            return {
                ...state,
                categoryActive: action.categoryActive,
            };
        case SET_CATEGORIES_DATA:
            return {
                ...state,
                categories: action.categories
            };
    
        case SET_SCOPES_DATA:
            return {
                ...state,
                scopes: action.scopes
            }
        case USERS_FETCH_ALL_SUCCESS:
            return {
                ...state,
                users: action.users
            }
        case USERS_FETCH_FAILED:
            return {
                ...state
            }
        case USERS_FETCH_REQUESTED:
            return {
                ...state
            } 
        case SET_ALL_DATA:
            return {
                ...state,
                categories: action.categories,
                scopes: action.scopes,
                tasks: action.tasks,
                users: action.users,
                statuses: action.statuses,
            }
        case GET_ALL_DATA_SUCCESS:
            console.log(action)
            return {
                ...state,
                categories: action.categories,
                scopes: action.scopes,
                tasks: action.tasks,
                users: action.users,
                statuses: action.statuses,
            }
                        
        default:
            return state;
    }
};