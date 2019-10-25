import { 
    LOAD_INFO_VALUE, 
    SET_CATEGORIES_DATA,
    SET_SCOPES_DATA,
    TOGGLE_ACTIVE_CATEGORY,
    SET_ALL_DATA,
    USERS_FETCH_REQUESTED,
    GET_ALL_DATA,
    TOGGLE_MODAL_VISIBLE

} from './actionTypes';

function toggleModalVisible(data){
  return {
    type: TOGGLE_MODAL_VISIBLE,
    modalAction: data.modalAction,
    dataType: data.dataType,
    currentVisible: data.currentVisible

  };
};

const loadInfo = value => ({
    type: LOAD_INFO_VALUE,
    newInfoValue: value
});

function setAllData(data){
    return {
        type: SET_ALL_DATA,
        categories: data.categories,
        scopes: data.scopes,
        tasks: data.tasks,
        users: data.users,
        statuses: data.statuses,
    }
}

function getAllData(){
  return {
    type: GET_ALL_DATA,
  }
}

function setCategories(data){
    return {
      type: SET_CATEGORIES_DATA,
      categories: data
    };
  };

  function setScopes(data){
    return {
        type: SET_SCOPES_DATA,
        scopes: data
    };
  };

  function toggleCategory(id, name){
    return {
        type: TOGGLE_ACTIVE_CATEGORY,
        categoryActive: name
    };
  };

  function getUsers(){
    return {
      type: USERS_FETCH_REQUESTED,
    };
  };


export {
    setCategories,
    setScopes,
    toggleCategory,
    setAllData,
    getUsers,
    getAllData,
    toggleModalVisible
}