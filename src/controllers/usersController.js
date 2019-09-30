//import React, {useState} from 'react';
import {api_url} from '../config/database';
const controller = '/users';

//class UsersController extends React.Component{
class UsersController{  /*
    constructor(props){
        super(props);
        this.state = {

        };

        this.getAll = this.getAll.bind(this);
    }*/

    getAll = async () => {
        let url = api_url + '/users';
        
        return fetch(url)
        .then(response => response.json())
        .then(responseJSON => {
            return responseJSON;
          })
          .catch(error => {return error;})
          
      };

      create = async (userData) => {
        let url = api_url + controller + '/register';

        return fetch(url, {
            method: "POST",
            body: JSON.stringify({
                name: userData.name.toUpperCase(),
                email: userData.email.toUpperCase(),
                password: userData.password.toUpperCase(),
            }),
            headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
        .then(responseJSON => {
            return responseJSON;
          })
          .catch(error => {return error;})
          
      };

      update = async (userData) => {
        let url = api_url + controller + '/update';

        return fetch(url, {
            method: "POST",
            body: JSON.stringify({
                id: userData.id,
                name: userData.name.toUpperCase(),
                email: userData.email.toUpperCase(),
                password: userData.password.toUpperCase(),
            }),
            headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
        .then(responseJSON => {
            return responseJSON;
          })
          .catch(error => {return error;})
      };

      delete = async (userData) => {
        let url = api_url + controller + '/delete';

        return fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                id: userData.id
            }),
            headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
        .then(responseJSON => {
            return responseJSON;
        })
        .catch(error => {return error;})
      };

}

export default UsersController;
