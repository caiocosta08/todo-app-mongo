import React from 'react';

const UsersController = require('../../../../controllers/usersController')

class UsersDelete extends React.Component {
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
    this.deleteUser = this.deleteUser.bind(this);
  
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
    alert('The delete was succesfully completed!');
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

  deleteUser(userData){
    let Users = new UsersController.default();
    let users = Users.deleteUser(userData);
    if(users){
      this.cleanState();
      this.redirectSuccess();
    }else{}
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
          <h1>Delete user {this.state.id}</h1>
          <h5>ID: {this.state.id}</h5>
          <h5>Name: {this.state.name}</h5>
          <h5>E-mail: {this.state.email}</h5>

            
          
          <button onClick={() => {
            this.deleteUser(this.getStateValues())
          }
          }>Delete</button>
        </div>
      );
  }
}

export default UsersDelete;
