import React from 'react';

import { Button, Table } from 'react-bootstrap';
import ModalCreateScope from './components/modals/modalCreateScope';
import ModalUpdateScope from './components/modals/modalUpdateScope';

const ScopesController = require('../../controllers/scopesController')
  

class ScopesList extends React.Component {

  
  state = {
    id: '',
    name: '',
    description: '',
    scopes: [],
    loadingScopes: true,
    modalCreateScopeVisible: false,
    modalUpdateScopeVisible: false,
  };

  constructor(props) {
    super(props);

    //state functions
    this.cleanState = this.cleanState.bind(this);
    this.getStateValues = this.getStateValues.bind(this);

    //dom functions
    this.redirectSuccess = this.redirectSuccess.bind(this);
    this.refreshPage = this.refreshPage.bind(this);

    //modal functions
    this.modalCreatScopeToggle = this.modalCreateScopeToggle.bind(this);
    this.modalUpdateScopeToggle = this.modalUpdateScopeToggle.bind(this);
    
    //controller functions
    this.getAllScopes = this.getAllScopes.bind(this); 
    this.createScope = this.createScope.bind(this);
    this.updateScope = this.updateScope.bind(this);
    this.deleteScope = this.deleteScope.bind(this);

    //call to get scopes to initialize array of scopes
    this.getAllScopes();
  }

  async getAllScopes(){
    let Scopes = new ScopesController.default();
    let scopes = await Scopes.getAll();
    if(scopes){
      this.setState({
        loadingScopes: false,
        scopes: scopes,
        id: scopes[0].id,
        name: scopes[0].name,
        description: scopes[0].description,
      })
    }
    else{} //console.log("Error")
    
  }

  async createScope(scopeData){
    let Scopes = new ScopesController.default();
    let scopes = await Scopes.create(scopeData);
    if(scopes){
      this.cleanState();
      this.redirectSuccess('create');
    }
    else{} //console.log("Error")
    
  }

  async updateScope(scopeData){
    let Scopes = new ScopesController.default();
    let scopes = await Scopes.update(scopeData);
    if(scopes){
      this.cleanState();
      this.redirectSuccess('update');
    }
    else{} //console.log("Error")
    
  }
  
  async deleteScope(scopeData){
    let Scopes = new ScopesController.default();
    let scopes = await Scopes.delete(scopeData);
    if(scopes){
      this.cleanState();
      this.redirectSuccess('delete');
    }else{}
  }   

  redirectSuccess(action){
    console.log('The '+ action +' was succesfully completed!');
    this.refreshPage();
  }

  refreshPage(){
    window.location.reload();
  }

  cleanState(){
    this.setState({
      name: '',
      description: '',
    })
  }

  getStateValues(){
    return this.state;
  }

  modalCreateScopeToggle(toggle){
    this.setState({modalCreateScopeVisible: !toggle})
  }
  modalUpdateScopeToggle(toggle){
    this.setState({modalUpdateScopeVisible: !toggle})
  }
  

  static async getDerivedStateFromProps(props, state){
    
  }


  render() {
      if(this.state.loadingScopes) 
      {
        return (
          <div>
            <h3>Loading...</h3>
        </div>
      );
    }
    else {
      if(!this.state.loadingScope)
      return (
        
        <div>
        <ModalCreateScope
          show={this.state.modalCreateScopeVisible}
          onHide={() => this.setState({modalCreateScopeVisible: false})}
          //onHide={() => this.modalCreateScopeToggle(this.state.modalCreateScopeVisible)}
        />
        <ModalUpdateScope
          show={this.state.modalUpdateScopeVisible}
          onHide={() => this.setState({modalUpdateScopeVisible: false})}
          scopedata={this.getStateValues()}
          //onHide={() => this.modalCreateScopeToggle(this.state.modalCreateScopeVisible)}
        />
          <div>
            <h1>Scopes list</h1>
            <Button onClick={() => {
              this.setState({modalCreateScopeVisible: true})
            }
            }>Add New Scope</Button>
            <br />
            <br />
          </div>
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
            {this.state.scopes.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <Button variant="primary" onClick={() => {
                this.setState({id: item.id, name: item.name, description: item.description}); 
                this.setState({modalUpdateScopeVisible: true}) } /*this.updateScope({})*/}>
                  Edit
                </Button>
              </td>
              
              <td><Button variant="danger" onClick={() => this.deleteScope({id: item.id})}>Delete</Button></td>
            </tr>
          ))} 
            </tbody>
          </Table>
        </div>
      )
    }
  }
}

export default ScopesList;
