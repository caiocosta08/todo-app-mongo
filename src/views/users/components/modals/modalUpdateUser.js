import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
const UsersController = require('../../../../controllers/usersController')

function ModalUpdateUser(props, state) {  
    state = {
        id: props.userdata.id,
        name: props.userdata.name,
        email: props.userdata.email,
        password: props.userdata.password,
    };

    /*
    async function getAllUsers(){
        let Users = new UsersController.default();
        let users = await Users.getAll();
        if(users){
            state.loadingUsers = false;
            state.users = users;
            state.id = users[0].id;
            state.name = users[0].name;
            state.email = users[0].email;
            state.password = users[0].password;
        }
        else{} //console.log("Error")
    
    }
    getAllUsers();*/

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
        state.email = '';
        state.password = '';
      }
    
      function getStateValues(){
        return state;
      }
      
  async function updateUser(userData){

    let Users = new UsersController.default();
    let users = await Users.update(userData);
    if(users){
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
        Update User: {state.id}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        
        <Form>
            <Form.Group controlId="fieldName">
                <Form.Label>Name</Form.Label>
                <Form.Control defaultValue={state.name} onChange={(event) => {state.name = event.target.value}} type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group controlId="fieldEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control defaultValue={state.email} onChange={(event) => {state.email = event.target.value}} type="email" placeholder="Enter e-mail" />
            </Form.Group>
            <Form.Group controlId="fieldPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control defaultValue={state.password} onChange={(event) => {state.password = event.target.value}} type="password" placeholder="Enter password" />
            </Form.Group>
        </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={() => {
          props.onHide();
          updateUser(getStateValues());
          
          }}>Update User</Button>
          <Button onClick={() => {
              props.onHide();
              }}>Close</Button>
    </Modal.Footer>
  </Modal>
);
}
export default ModalUpdateUser;

