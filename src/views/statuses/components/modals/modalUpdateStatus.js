import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
const StatusesController = require('../../../../controllers/statusesController')

function ModalUpdateStatus(props, state) {  
    state = {
        id: props.statusdata.id,
        name: props.statusdata.name,
        description: props.statusdata.description,
    };

    /*
    async function getAllStatuses(){
        let Statuses = new StatusesController.default();
        let statuss = await Statuses.getAll();
        if(statuss){
            state.loadingStatuses = false;
            state.statuss = statuss;
            state.id = statuss[0].id;
            state.name = statuss[0].name;
            state.email = statuss[0].email;
            state.password = statuss[0].password;
        }
        else{} //console.log("Error")
    
    }
    getAllStatuses();*/

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
      
  async function updateStatus(statusData){

    let Statuses = new StatusesController.default();
    let statuss = await Statuses.update(statusData);
    if(statuss){
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
        Update Status: {state.id}
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
          updateStatus(getStateValues());
          
          }}>Update Status</Button>
          <Button onClick={() => {
              props.onHide();
              }}>Close</Button>
    </Modal.Footer>
  </Modal>
);
}
export default ModalUpdateStatus;

