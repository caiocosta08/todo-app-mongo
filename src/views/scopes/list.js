import React, { useEffect} from 'react';
import {api_url} from '../../config/database';
import { Button, Table } from 'react-bootstrap';

import {connect} from 'react-redux';

import * as dataCategories from '../../controllers/categories';
import * as dataScopes from '../../controllers/scopes';
import * as dataStatuses from '../../controllers/statuses';
import * as dataTasks from '../../controllers/tasks';
import * as dataUsers from '../../controllers/users';

import * as loadActions from '../../actions/index';

const CategoriesList = ({scopes, getAllData}) => (

  
  useEffect( () => {

    getAllData();

  }, [getAllData]),

  <div>
    <h1>Scopes</h1>

          <div>
            <Button onClick={() => {
              console.log('clicou no add new scope')
              //this.setState({modalCreateScopeVisible: true})
            }
            }>Add New Scope</Button>
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
{scopes.map(item => (
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
  
  <td><Button variant="danger" onClick={() => console.log(deleteScope({id: item.id})) /*dataScopes.remove({id: item.id})*/}>Delete</Button></td>
</tr>
))} 
</tbody>
</Table>
    
  </div>
);

async function deleteScope(scope){
  let response = await dataScopes.remove(scope);
  if(response){
    cleanState();
    redirectSuccess('delete');
  }else{}
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
    
    scopes: state.loadState.scopes,

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

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
