import React, {useEffect} from 'react';
import UsersList from './views/users/list';
import CategoriesList from './views/categories/list';
import StatusesList from './views/statuses/list';
import ScopesList from './views/scopes/list';
import TasksList from './views/tasks/list';
import Index from './views/index/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { connect } from 'react-redux';
import * as loadActions from './actions/index';

const Main = ({getAllData}) => (
  
  useEffect( () => {

    getAllData();

  }, []),

    <Router>
      <div>
        <ul>
          <li>
            <Link to="/users/list">User List</Link>
          </li>
          <li>
            <Link to="/categories/list">Categories List</Link>
          </li>
          <li>
            <Link to="/statuses/list">Statuses List</Link>
          </li>
          <li>
            <Link to="/scopes/list">Scopes List</Link>
          </li>
          <li>
            <Link to="/tasks/list">Tasks List</Link>
          </li>
          <li>
            <Link to="/index">Index</Link>
          </li>
        </ul>

        <hr />

        <Route path="/users/list" component={UsersList} />
        <Route path="/categories/list" component={CategoriesList} />
        <Route path="/statuses/list" component={StatusesList} />
        <Route path="/scopes/list" component={ScopesList} />
        <Route path="/tasks/list" component={TasksList} />
        <Route path="/index" component={Index} />
      </div>
    </Router>

);  

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

  getAllData: () => {
    return dispatch(loadActions.getAllData());
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
