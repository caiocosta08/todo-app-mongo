//import React, {useState} from 'react';
import {api_url} from '../config/database';
const controller = '/tasks';

//class TasksController extends React.Component{
class TasksController{  /*
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

      create = async (taskData) => {
        let url = api_url + controller + '/new';

        return fetch(url, {
            method: "POST",
            body: JSON.stringify({
                name: taskData.name.toUpperCase(),
                description: taskData.description.toUpperCase(),
                user_id: taskData.user_id,
                scope: taskData.scope,
                date_todo: taskData.date_todo,
                categorie_id: taskData.categorie_id,
                status_id: taskData.status_id,
                date_finish: taskData.date_finish,
            }),
            headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
        .then(responseJSON => {
            return responseJSON;
          })
          .catch(error => {return error;})
          
      };

      update = async (taskData) => {
        let url = api_url + controller + '/update';

        return fetch(url, {
            method: "POST",
            body: JSON.stringify({
                id: taskData.id,
                name: taskData.name.toUpperCase(),
                description: taskData.description.toUpperCase(),
                user_id: taskData.user_id,
                scope: taskData.scope,
                date_todo: taskData.date_todo,
                categorie_id: taskData.categorie_id,
                status_id: taskData.status_id,
                date_finish: taskData.date_finish,
            }),
            headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
        .then(responseJSON => {
            return responseJSON;
          })
          .catch(error => {return error;})
      };

      delete = async (taskData) => {
        let url = api_url + controller + '/delete';

        return fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                id: taskData.id,
                //user_id: taskData.user_id,
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

export default TasksController;
