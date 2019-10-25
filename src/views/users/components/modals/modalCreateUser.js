import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
const UsersController = require('../../../../controllers/usersController')

function ModalCreateUser(props, state) {  
    state = {
        name: '',
        email: '',
        password: '',
    };

    function redirectSuccess(action){
        console.log('The '+ action +' was succesfully completed!');
        refreshPage();
      }
    
      function refreshPage(){
        window.location.reload();
      }

    function cleanState(){
        state.name = '231';
        state.email = '';
        state.password = '';
      }
    
      function getStateValues(){
        return state;
      }
      
  async function createUser(userData){
    let Users = new UsersController.default();
    let users = await Users.create(userData);
    if(users){
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
        Create User
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        
        <Form>
            <Form.Group controlId="fieldName">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(event) => {state.name = event.target.value}} type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group controlId="fieldEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control onChange={(event) => {state.email = event.target.value}} type="email" placeholder="Enter e-mail" />
            </Form.Group>
            <Form.Group controlId="fieldPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(event) => {state.password = event.target.value}} type="password" placeholder="Enter password" />
            </Form.Group>
        </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={() => {
          props.onHide();
          createUser(getStateValues());
          
          }}>Add User</Button>
          <Button onClick={() => {
              props.onHide();
              }}>Close</Button>
    </Modal.Footer>
  </Modal>
);
}
export default ModalCreateUser;

