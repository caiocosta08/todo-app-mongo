import React, { useEffect} from 'react';

import {connect} from 'react-redux';

import * as dataCategories from '../../controllers/categories';
import * as dataScopes from '../../controllers/scopes';
import * as dataStatuses from '../../controllers/statuses';
import * as dataTasks from '../../controllers/tasks';
import * as dataUsers from '../../controllers/users';

import * as loadActions from '../../actions/index';

const CategoriesList = ({categories, categoryActive, toggleCategory, setAllData}) => (

    
  useEffect( () => {

    const getData = async () => {
      const getCategories = await dataCategories.getAll();
      const getScopes = await dataScopes.getAll();
      const getStatuses = await dataStatuses.getAll();
      const getTasks = await dataTasks.getAll();
      const getUsers = await dataUsers.getAll();
      if(getCategories && getScopes && getStatuses && getTasks && getUsers){
        setAllData({
          categories: getCategories,
          scopes: getScopes,
          statuses: getStatuses,
          tasks: getTasks,
          users: getUsers
        });
      }else{
        console.log("NOT YET")
      }
    };
    getData();

  // eslint-disable-next-line no-sequences
  }, [setAllData]),

  <div>
    <h3>Categoria ativa: {categoryActive}</h3>
    {categories.map(category => (
      <div key={category.id}>
        <h3>{category.id} - {category.name}</h3>
        <button onClick={() => toggleCategory(category.id, category.name)}>Select</button>
      </div>
    ))}
    
  </div>
);

const mapStateToProps = state => ({
    
    categoryActive: state.loadState.categoryActive,
    categories: state.loadState.categories,

});

const mapDispatchToProps = dispatch => ({
  
  setCategories: (data) => {
    return dispatch(loadActions.setCategories(data));
  },

  setScopes: (data) => {
    return dispatch(loadActions.setScopes(data));
  },

  toggleCategory: (id, name) => {
    return dispatch(loadActions.toggleCategory(id, name));
  },

  setAllData: (data) => {
    return dispatch(loadActions.setAllData(data))
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
