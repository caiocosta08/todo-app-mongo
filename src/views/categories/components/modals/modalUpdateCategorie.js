import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
const CategoriesController = require('../../../../controllers/categoriesController')

function ModalUpdateCategorie(props, state) {  
    state = {
        id: props.categoriedata.id,
        name: props.categoriedata.name,
        description: props.categoriedata.description,
    };

    /*
    async function getAllCategories(){
        let Categories = new CategoriesController.default();
        let categories = await Categories.getAll();
        if(categories){
            state.loadingCategories = false;
            state.categories = categories;
            state.id = categories[0].id;
            state.name = categories[0].name;
            state.email = categories[0].email;
            state.password = categories[0].password;
        }
        else{} //console.log("Error")
    
    }
    getAllCategories();*/

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
      
  async function updateCategorie(categorieData){

    let Categories = new CategoriesController.default();
    let categories = await Categories.update(categorieData);
    if(categories){
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
        Update Categorie: {state.id}
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
          updateCategorie(getStateValues());
          
          }}>Update Categorie</Button>
          <Button onClick={() => {
              props.onHide();
              }}>Close</Button>
    </Modal.Footer>
  </Modal>
);
}
export default ModalUpdateCategorie;

