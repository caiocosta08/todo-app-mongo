import React from 'react';
const UsersController = require('../../../../controllers/usersController')

class UsersUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      email: '',
      password: '',
      modalIsOpen: false,
      users: [],
      loadingUsers: true,
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.redirectSuccess = this.redirectSuccess.bind(this);
    this.cleanState = this.cleanState.bind(this);
    this.getStateValues = this.getStateValues.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
    
    this.getAllUsers = this.getAllUsers.bind(this);
    this.updateUser = this.updateUser.bind(this);

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

  

  async updateUser(userData){
    let Users = new UsersController.default();
    let users = await Users.updateUser(userData);
    if(users){
      this.cleanState();
      this.redirectSuccess();
    }
    else{} //console.log("Error")
    
  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  afterOpenModal(){
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = '#f00';
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  redirectSuccess(){
    alert('The update was succesfully completed!');
    this.refreshPage();
  }

  refreshPage(){
    window.location.reload();
  }

  cleanState(){
    this.setState({
      id: '',
      name: '',
      email: '',
      password: ''
    })
  }

  getStateValues(){
    return this.state;
  }   

  render() {
    if(this.state.loadingUsers) return (<div>Loading...</div>)
    else
        return (
          <div>
            <select value={this.state.id} onChange={
              (event) => {
                let currentId = event.target.value;
                this.setState({id: currentId.toString()})
                this.state.users.forEach(user => {
                  if(currentId.toString() === user.id.toString()){
                    this.setState({
                      name: user.name,
                      email: user.email,
                      password: user.password
                    })
                  }else{
                  }
                })
              } 
            }
            >
              {
                this.state.users.map((user) => (
                  <option key={user.id} value={user.id}>{user.name}</option>
                ))
              }
            </select>
          <h1>Edit user {this.state.id}</h1>
          <input value={this.state.name} type='text' placeholder='Name' onChange={(event) => {this.setState({name: event.target.value})}} />
          <br /><br />
          <input value={this.state.email} type='text' placeholder='Email' onChange={(event) => {this.setState({email: event.target.value})}} />
          <br /><br />
          <input value={this.state.password} type='password' placeholder='Password' onChange={(event) => {this.setState({password: event.target.value})}} />
          <br /><br />
          
          <button onClick={() => {
            this.updateUser(this.getStateValues())
          }
          }>Save</button>
        </div>
      );
  }
}

export default UsersUpdate;
