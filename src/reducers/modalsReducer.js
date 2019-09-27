import { 
    TOGGLE_MODAL_VISIBLE,
} from '../actions/actionTypes';

const INITIAL_STATE = {
    modalCreateStatusVisible: false,
    modalUpdateStatusVisible: false,
    modalCreateUserVisible: false,
    modalUpdateUserVisible: false,
    modalCreateCategoryVisible: false,
    modalUpdateCategoryVisible: false,
    modalCreateScopeVisible: false,
    modalUpdateScopeVisible: false,
    modalCreateTaskVisible: false,
    modalUpdateTaskVisible: false,
}



export const modalsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){

        case TOGGLE_MODAL_VISIBLE:
            if(action.modalAction == 'create' && action.dataType == 'status'){
                console.log(action)
                console.log('antes da mudança: ' + state.modalCreateStatusVisible + ' - novo valor: ' + !action.currentVisible)
                return {
                    ...state,
                    //modalCreateStatusVisible: !action.currentVisible
                    modalCreateStatusVisible: !state.modalCreateStatusVisible
                }
            }
            else
            return {
                ...state,
                
            };
                        
        default:
            return state;
    }
};