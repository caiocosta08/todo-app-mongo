import React, { useEffect, useState} from 'react';
import {api_url} from '../../config/database';
import { Button, Table } from 'react-bootstrap';

import {connect} from 'react-redux';

import * as dataStatuses from '../../controllers/statuses';
import * as dataScopes from '../../controllers/scopes';
import * as dataTasks from '../../controllers/tasks';
import * as dataCategories from '../../controllers/categories';
import * as dataUsers from '../../controllers/users';

import * as loadActions from '../../actions/index';

const StatusesList = ({statuses}) => { 
  
  return (
    
  useEffect( async () => {
  }, []),

  <div>
    <h1>Statuses</h1>

          <div>
            <Button>Add New Status</Button>
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
    //this.setState({id: item.id, name: item.name, description: item.description}); 
    //this.setState({modalUpdateScopeVisible: true}) 
    } /*this.updateScope({})*/}>
      Edit
    </Button>
  </td>
  
  <td><Button variant="danger" onClick={() => console.log(deleteStatus({id: item.id})) /*dataScopes.remove({id: item.id})*/}>Delete</Button></td>
</tr>
))} 
</tbody>
</Table>
    
  </div>
)
};


async function deleteStatus(status){
  let response = await dataStatuses.remove(status);
  if(response){
    cleanState();
    redirectSuccess('delete');
  }else{}
}

async function addStatus(status){
  //let response = await dataStatuses.create(status);
  //let responseTasks = await dataTasks.create(status);
  //let responseScopes = await dataScopes.create(status);
  //let responseUsers = await dataUsers.create(status);
  //let responseCategories = await dataCategories.create(status);
  //if(responseTasks && responseScopes && responseUsers && responseCategories){
  //  console.log(responseTasks)
  //  //cleanState();
  //  //redirectSuccess('create');
  //}else{}
}

function redirectSuccess(action){
  console.log('The '+ action +' was succesfully completed!');
  refreshPage();
}

function refreshPage(){
  window.location.reload();
}

function cleanState(){
  /*this.setState({
    name: '',
    description: '',
  })*/
}

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

  /*
  toggleModalVisible: (data) => {
    return dispatch(loadActions.toggleModalVisible(data));
  }*/

});

export default connect(mapStateToProps, mapDispatchToProps)(StatusesList);
