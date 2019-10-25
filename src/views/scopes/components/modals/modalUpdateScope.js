import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
const ScopesController = require('../../../../controllers/scopesController')

function ModalUpdateScope(props, state) {  
    state = {
        id: props.scopedata.id,
        name: props.scopedata.name,
        description: props.scopedata.description,
    };

    /*
    async function getAllScopes(){
        let Scopes = new ScopesController.default();
        let scopes = await Scopes.getAll();
        if(scopes){
            state.loadingScopes = false;
            state.scopes = scopes;
            state.id = scopes[0].id;
            state.name = scopes[0].name;
            state.email = scopes[0].email;
            state.password = scopes[0].password;
        }
        else{} //console.log("Error")
    
    }
    getAllScopes();*/

    function redirectSuccess(action){
        console.log('The '+ action +' was succesfully completed!');
        refreshPage();
      }
    
      function refreshPage(){
        window.location.reload();
      }

    function cleanState(){
        state.id = '';
        state.name = '';
        state.description = '';
      }
    
      function getStateValues(){
        return state;
      }
      
  async function updateScope(scopeData){

    let Scopes = new ScopesController.default();
    let scopes = await Scopes.update(scopeData);
    if(scopes){
        cleanState();
        redirectSuccess('update');
    }
    else{} //console.log("Error")
    
  }
    return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Update Scope: {state.id}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        
        <Form>
            <Form.Group controlId="fieldName">
                <Form.Label>Name</Form.Label>
                <Form.Control defaultValue={state.name} onChange={(event) => {state.name = event.target.value}} type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group controlId="fieldDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control defaultValue={state.description} onChange={(event) => {state.description = event.target.value}} type="text" placeholder="Enter description" />
            </Form.Group>
        </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={() => {
          props.onHide();
          updateScope(getStateValues());
          
          }}>Update Scope</Button>
          <Button onClick={() => {
              props.onHide();
              }}>Close</Button>
    </Modal.Footer>
  </Modal>
);
}
export default ModalUpdateScope;

