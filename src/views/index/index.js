import React, { useEffect, useState} from 'react';
import { Button, Table } from 'react-bootstrap';

import {connect} from 'react-redux';

import * as loadActions from '../../actions/index';
import { api_url } from '../../config/database';


const Index = ({}) => { 
  
  return (
    
  useEffect( () => {
    async function fetchData(){
        let url = api_url + '/auth/list';
        console.log(url)
        let response = await fetch(url)
            .then(response => response.json())
            .then(responseJSON => console.log(responseJSON))
            .catch(error => console.log(error));
        return await response;
    }

    fetchData();

    //console.log(data);
  }, []),

  <div>
    <h1>Index</h1>

          <div>
            <Button onClick={ () => { 
            
            }
            }>Click Me</Button>
          </div>
            <br />  
            <br />
<Table> 

<thead>
  <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>DESCRIPTION</th>
    <th colSpan="2">ACTIONS</th>
  </tr>
</thead>
<tbody>
    
</tbody>
</Table>
    
  </div>
)
};




const mapStateToProps = state => ({
    
    //statuses: state.loadState.statuses,

});

const mapDispatchToProps = dispatch => ({

  setAllData: (data) => {
    return dispatch(loadActions.setAllData(data))
  },

  getUsers: () => {
    return dispatch(loadActions.getUsers());
  },

  getAllData: () => {
    return dispatch(loadActions.getAllData());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
