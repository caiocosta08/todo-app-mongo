import { CLICK_UPDATE_VALUE } from '../actions/actionTypes';

const INITIAL_STATE = {
    newValue: 'Click Reducer Value'
};

export const clickReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case CLICK_UPDATE_VALUE:
            return {
                ...state, 
                newValue: action.newValue
            };
        default:
            return state;
    }
};