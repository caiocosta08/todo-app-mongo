import React from 'react';

import { Button, Table } from 'react-bootstrap';

const UsersController = require('../../controllers/usersController')
  

class UsersList extends React.Component {

  
  state = {
    id: '',
    name: '',
    email: '',
    password: '',
    users: [],
    loadingUsers: true,
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
    this.getAllUsers = this.getAllUsers.bind(this); 
    this.createUser = this.createUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);

    //call to get users to initialize array of users
    this.getAllUsers();
  }

  async getAllUsers(){
    let Users = new UsersController.default();
    let users = await Users.getAll();
    if(users){
      this.setState({
        loadingUsers: false,
        users: users,
        id: users[0].id,
        name: users[0].name,
        email: users[0].email,
        password: users[0].password,
      })
    }
    else{} //console.log("Error")
    
  }

  async createUser(userData){
    let Users = new UsersController.default();
    let users = await Users.create(userData);
    if(users){
      this.cleanState();
      this.redirectSuccess('create');
    }
    else{} //console.log("Error")
    
  }

  async updateUser(userData){
    let Users = new UsersController.default();
    let users = await Users.update(userData);
    if(users){
      this.cleanState();
      this.redirectSuccess('update');
    }
    else{} //console.log("Error")
    
  }
  
  async deleteUser(userData){
    let Users = new UsersController.default();
    let users = await Users.delete(userData);
    if(users){
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
      email: '',
      password: ''
    })
  }

  getStateValues(){
    return this.state;
  }
  
  static async getDerivedStateFromProps(props, state){
    
  }


  render() {
      if(this.state.loadingUsers) 
      {
        return (
          <div>
            <h3>Loading...</h3>
        </div>
      );
    }
    else {
      if(!this.state.loadingUser)
      return (
        
        <div>
          <div>
            <h1>Users list</h1>
            <Button onClick={() => {
              this.setState({modalCreateUserVisible: true})
            }
            }>Add New User</Button>
            <br />
            <br />
          </div>
          <Table> 

            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>E-MAIL</th>
                <th>PASSWORD</th>
                <th colSpan="2">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
            {this.state.users.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>
                <Button variant="primary" onClick={() => {
                this.setState({id: item.id, name: item.name, email: item.email,password: item.password}); 
                this.setState({modalUpdateUserVisible: true}) } /*this.updateUser({})*/}>
                  Edit
                </Button>
              </td>
              
              <td><Button variant="danger" onClick={() => this.deleteUser({id: item.id})}>Delete</Button></td>
            </tr>
          ))} 
            </tbody>
          </Table>
        </div>
      )
    }
  }
}

export default UsersList;
