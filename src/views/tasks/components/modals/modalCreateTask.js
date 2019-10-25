import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
const TasksController = require('../../../../controllers/tasksController')

function ModalCreateTask(props, state) {  
    state = {
      name: '',
      description: '',
      user_id: props.data.users[0].id,
      users: props.data.users,
      scope: props.data.scopes[0].id,
      scopes: props.data.scopes,
      date_todo: '',
      categorie_id: props.data.categories[0].id,
      categories: props.data.categories,
      status_id: props.data.statuses[0].id,
      statuses: props.data.statuses,
      date_finish: '',
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
        state.user_id = '';
        state.scope = '';
        state.date_todo = '';
        state.categorie_id = '';
        state.status_id = '';
        state.date_finish = '';
      }
    
      function getStateValues(){
        return state;
      }
      
  async function createTask(taskData){
    let Tasks = new TasksController.default();
    let tasks = await Tasks.create(taskData);
    if(tasks){
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
        Create Task
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
            <Form.Group defaultValue={state.user_id} controlId="userIdSelect">
              <Form.Label>User</Form.Label>
              <Form.Control onChange={(event) => {state.user_id = event.target.value}} as="select">
                {state.users.map( (item) => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))
                }
              </Form.Control>
            </Form.Group>
            <Form.Group defaultValue={state.user_id} controlId="userIdSelect">
              <Form.Label>Scope</Form.Label>
              <Form.Control onChange={(event) => {state.scope = event.target.value}} as="select">
                {state.scopes.map( (item) => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))
                }
              </Form.Control>
            </Form.Group>
            <Form.Group defaultValue={state.user_id} controlId="userIdSelect">
              <Form.Label>Categorie</Form.Label>
              <Form.Control onChange={(event) => {state.categorie_id = event.target.value}} as="select">
                {state.categories.map( (item) => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))
                }
              </Form.Control>
            </Form.Group>
            <Form.Group defaultValue={state.user_id} controlId="userIdSelect">
              <Form.Label>Status</Form.Label>
              <Form.Control onChange={(event) => {state.status_id = event.target.value}} as="select">
                {state.statuses.map( (item) => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))
                }
              </Form.Control>
            </Form.Group>
            <Form.Group defaultValue={state.user_id} controlId="userIdSelect">
              <Form.Label>Date</Form.Label>
              <Form.Control onChange={(event) => {state.date_todo = event.target.value}} type="date">
              </Form.Control>
            </Form.Group>
        </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={() => {
          props.onHide();
          createTask(getStateValues());
          
          }}>Add Task</Button>
          <Button onClick={() => {
              props.onHide();
              }}>Close</Button>
    </Modal.Footer>
  </Modal>
);
}

export default ModalCreateTask;

