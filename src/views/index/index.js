import React, { useEffect, useState} from 'react';
import { Button, Table } from 'react-bootstrap';

import {connect} from 'react-redux';

import * as loadActions from '../../actions/index';

const Index = ({statuses}) => { 
  
  return (
    
  useEffect( async () => {
    let response = await fetch(process.env.API_URL + 'auth/list')
        .then(response => response.json())
        .catch(error => error);
    console.log(response);
  }, []),

  <div>
    <h1>Statuses</h1>

          <div>
            <Button onClick={ () => { 
            
            }
            }>Add New Status</Button>
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
{statuses.map(item => (
<tr key={item.id}>
  <td>{item.id}</td>
  <td>{item.name}</td>
  <td>{item.description}</td>
  <td>
    <Button variant="primary" onClick={() => { console.log('clicou no botão edit com infos: ' + item.id +' - '+ item.name + ' - ' + item.description)
    } }>
      Edit
    </Button>
  </td>
  
  <td><Button variant="danger" onClick={() => console.log('clicou')}>Delete</Button></td>
</tr>
))} 
</tbody>
</Table>
    
  </div>
)
};




const mapStateToProps = state => ({
    
    statuses: state.loadState.statuses,

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
