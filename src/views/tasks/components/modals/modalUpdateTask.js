import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
const TasksController = require('../../../../controllers/tasksController')

function ModalUpdateTask(props, state) {  
    state = {
        id: props.taskdata.id,
        name: props.taskdata.name,
        description: props.taskdata.description,
        user_id: props.taskdata.user_id,
        scope: props.taskdata.scope,
        date_todo: props.taskdata.date_todo,
        categorie_id: props.taskdata.categorie_id,
        status_id: props.taskdata.status_id,
        date_finish: props.taskdata.date_finish,
    };

    /*
    async function getAllTasks(){
        let Tasks = new TasksController.default();
        let tasks = await Tasks.getAll();
        if(tasks){
            state.loadingTasks = false;
            state.tasks = tasks;
            state.id = tasks[0].id;
            state.name = tasks[0].name;
            state.email = tasks[0].email;
            state.password = tasks[0].password;
        }
        else{} //console.log("Error")
    
    }
    getAllTasks();*/

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
      
  async function updateTask(taskData){

    let Tasks = new TasksController.default();
    let tasks = await Tasks.update(taskData);
    if(tasks){
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
        Update Task: {state.id}
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
          updateTask(getStateValues());
          
          }}>Update Task</Button>
          <Button onClick={() => {
              props.onHide();
              }}>Close</Button>
    </Modal.Footer>
  </Modal>
);
}
export default ModalUpdateTask;

