import React from 'react';

import { Button, Table } from 'react-bootstrap';
import ModalCreateTask from './components/modals/modalCreateTask';
import ModalUpdateTask from './components/modals/modalUpdateTask';

const TasksController = require('../../controllers/tasksController')
const ScopesController = require('../../controllers/scopesController')
const CategoriesController = require('../../controllers/categoriesController')
const StatusesController = require('../../controllers/statusesController')
const UsersController = require('../../controllers/usersController')
  

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
    modalCreateTaskVisible: false,
    modalUpdateTaskVisible: false,
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
    this.modalCreatTaskToggle = this.modalCreateTaskToggle.bind(this);
    this.modalUpdateTaskToggle = this.modalUpdateTaskToggle.bind(this);
    
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
    
    let Scopes = new ScopesController.default();
    let scopes = await Scopes.getAll();
    let Categories = new CategoriesController.default();
    let categories = await Categories.getAll();
    let Users = new UsersController.default();
    let users = await Users.getAll();
    let Statuses = new StatusesController.default();
    let statuses = await Statuses.getAll();
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
    let Tasks = new TasksController.default();
    let tasks = await Tasks.getAll();
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
    let Tasks = new TasksController.default();
    let tasks = await Tasks.create(taskData);
    if(tasks){
      this.cleanState();
      this.redirectSuccess('create');
    }
    else{} //console.log("Error")
    
  }

  async updateTask(taskData){
    let Tasks = new TasksController.default();
    let tasks = await Tasks.update(taskData);
    if(tasks){
      this.cleanState();
      this.redirectSuccess('update');
    }
    else{} //console.log("Error")
    
  }
  
  async deleteTask(taskData){
    let Tasks = new TasksController.default();
    let tasks = await Tasks.delete(taskData);
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
        <ModalCreateTask
          show={this.state.modalCreateTaskVisible}
          onHide={() => this.setState({modalCreateTaskVisible: false})}
          data={this.getStateValues()}
          //onHide={() => this.modalCreateTaskToggle(this.state.modalCreateTaskVisible)}
        />
        <ModalUpdateTask
          show={this.state.modalUpdateTaskVisible}
          onHide={() => this.setState({modalUpdateTaskVisible: false})}
          taskdata={this.getStateValues()}
          //onHide={() => this.modalCreateTaskToggle(this.state.modalCreateTaskVisible)}
        />
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
