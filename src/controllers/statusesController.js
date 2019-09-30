//import React, {useState} from 'react';
import {api_url} from '../config/database';
const controller = '/statuses';

//class StatusesController extends React.Component{
class StatusesController{  /*
    constructor(props){
        super(props);
        this.state = {

        };

        this.getAll = this.getAll.bind(this);
    }*/

    getAll = async () => {
        let url = api_url + controller;
        
        return fetch(url)
        .then(response => response.json())
        .then(responseJSON => {
            return responseJSON;
          })
          .catch(error => {return error;})
          
      };

      create = async (statusData) => {
        let url = api_url + controller + '/register';

        return fetch(url, {
            method: "POST",
            body: JSON.stringify({
                name: statusData.name.toUpperCase(),
                description: statusData.description.toUpperCase(),
            }),
            headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
        .then(responseJSON => {
            return responseJSON;
          })
          .catch(error => {return error;})
          
      };

      update = async (statusData) => {
        let url = api_url + controller + '/update';

        return fetch(url, {
            method: "POST",
            body: JSON.stringify({
                id: statusData.id,
                name: statusData.name.toUpperCase(),
                description: statusData.description.toUpperCase(),
            }),
            headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
        .then(responseJSON => {
            return responseJSON;
          })
          .catch(error => {return error;})
      };

      delete = async (statusData) => {
        let url = api_url + controller + '/delete';

        return fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                id: statusData.id
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

export default StatusesController;
