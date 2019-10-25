import React from 'react';

import { Button, Table } from 'react-bootstrap';

const TasksController = require('../../controllers/tasks')
const ScopesController = require('../../controllers/scopes')
const CategoriesController = require('../../controllers/categories')
const StatusesController = require('../../controllers/statuses')
const UsersController = require('../../controllers/users')
  

class TasksList extends React.Component {

  
  state = {
    id: '',
    name: '',
    description: '',
    tasks: [],
    scopes: [],
    categories: [],
    statuses: [],
    users: [],
    loadingTasks: true,
    loadingData: true,
  };

  constructor(props) {
    super(props);

    //state functions
    this.cleanState = this.cleanState.bind(this);
    this.getStateValues = this.getStateValues.bind(this);

    //dom functions
    this.redirectSuccess = this.redirectSuccess.bind(this);
    this.refreshPage = this.refreshPage.bind(this);

    //controller functions
    this.getAllTasks = this.getAllTasks.bind(this); 
    this.createTask = this.createTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);

    //data functions
    this.getData = this.getData.bind(this);

    //call to get tasks to initialize array of tasks
    this.getAllTasks();
    this.getData();
  }

  async getData(){
    
    let scopes = await ScopesController.getAll();
    let categories = await CategoriesController.getAll();
    let users = await UsersController.getAll();
    let statuses = await StatusesController.getAll();
    if(scopes && categories && users && statuses){
      this.setState({
        loadingData: false,
        scopes: scopes,
        categories: categories,
        users: users,
        statuses: statuses
      })
    }
    else{} //console.log("Error")
  }

  async getAllTasks(){
    let tasks = await TasksController.getAll();
    if(tasks){
      this.setState({
        loadingTasks: false,
        tasks: tasks,
        id: tasks[0].id,
        name: tasks[0].name,
        description: tasks[0].description,
      })
    }
    else{} //console.log("Error")
    
  }

  async createTask(taskData){
    let tasks = await TasksController.create(taskData);
    if(tasks){
      this.cleanState();
      this.redirectSuccess('create');
    }
    else{} //console.log("Error")
    
  }

  async updateTask(taskData){
    let tasks = await TasksController.update(taskData);
    if(tasks){
      this.cleanState();
      this.redirectSuccess('update');
    }
    else{} //console.log("Error")
    
  }
  
  async deleteTask(taskData){
    let tasks = await TasksController.delete(taskData);
    if(tasks){
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

  modalCreateTaskToggle(toggle){
    this.setState({modalCreateTaskVisible: !toggle})
  }
  modalUpdateTaskToggle(toggle){
    this.setState({modalUpdateTaskVisible: !toggle})
  }
  

  static async getDerivedStateFromProps(props, state){
    
  }


  render() {
      if(this.state.loadingTasks || this.state.loadingData) 
      {
        return (
          <div>
            <h3>Loading...</h3>
        </div>
      );
    }
    else {
      if(!this.state.loadingTask && !this.state.loadingData)
      return (
        
        <div>

          <div>
            <h1>Tasks list</h1>
            <Button onClick={() => {
              this.setState({modalCreateTaskVisible: true})
            }
            }>Add New Task</Button>
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
            {this.state.tasks.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <Button variant="primary" onClick={() => {
                this.setState({id: item.id, name: item.name, description: item.description}); 
                this.setState({modalUpdateTaskVisible: true}) } /*this.updateTask({})*/}>
                  Edit
                </Button>
              </td>
              
              <td><Button variant="danger" onClick={() => this.deleteTask({id: item.id})}>Delete</Button></td>
            </tr>
          ))} 
            </tbody>
          </Table>
        </div>
      )
    }
  }
}

export default TasksList;
