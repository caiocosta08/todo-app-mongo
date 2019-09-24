import React from 'react';
import UsersList from './views/users/list';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Main() {

  return(
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/users/list">User List</Link>
          </li>
        </ul>

        <hr />

        <Route path="/users/list" component={UsersList} />
      </div>
    </Router>
  );

}

export default Main;
