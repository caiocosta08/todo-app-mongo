import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
const ScopesController = require('../../../../controllers/scopesController')

function ModalCreateScope(props, state) {  
    state = {
        name: '',
        description: '',
    };

    function redirectSuccess(action){
        console.log('The '+ action +' was succesfully completed!');
        refreshPage();
      }
    
      function refreshPage(){
        window.location.reload();
      }

    function cleanState(){
        state.name = '';
        state.description = '';
      }
    
      function getStateValues(){
        return state;
      }
      
  async function createScope(scopeData){
    let Scopes = new ScopesController.default();
    let scopes = await Scopes.create(scopeData);
    if(scopes){
      cleanState();
      redirectSuccess('create');
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
        Create Scope
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        
        <Form>
            <Form.Group controlId="fieldName">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(event) => {state.name = event.target.value}} type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group controlId="fieldDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={(event) => {state.description = event.target.value}} type="text" placeholder="Enter description" />
            </Form.Group>
        </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={() => {
          props.onHide();
          createScope(getStateValues());
          
          }}>Add Scope</Button>
          <Button onClick={() => {
              props.onHide();
              }}>Close</Button>
    </Modal.Footer>
  </Modal>
);
}
export default ModalCreateScope;

