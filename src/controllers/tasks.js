//import React, {useState} from 'react';
import {api_url} from '../config/database';
const controller = '/tasks';



const getAll = async () => {
    let url = api_url + controller + '/list';
    
    return fetch(url)
    .then(response => response.json())
    .then(responseJSON => {
        return responseJSON;
      })
      .catch(error => {return error;})
      
  };

  const create = async (taskData) => {
    let url = api_url + controller + '/register';

    return fetch(url, {
        method: "POST",
        body: JSON.stringify({
            name: taskData.name.toUpperCase(),
            description: taskData.description.toUpperCase(),
            user_id: taskData.user_id,
            scope_id: taskData.scope_id,
            date_todo: taskData.date_todo,
            category_id: taskData.category_id,
            status_id: taskData.status_id,
            //date_finish: taskData.date_finish,
        }),
        headers: {"Content-Type": "application/json"}
    })
    .then(response => response.json())
    .then(responseJSON => {
        return responseJSON;
      })
      .catch(error => {return error;})
      
  };

  const update = async (taskData) => {
    let url = api_url + controller + '/update';

    return fetch(url, {
        method: "POST",
        body: JSON.stringify({
            id: taskData.id,
            name: taskData.name.toUpperCase(),
            description: taskData.description.toUpperCase(),
            user_id: taskData.user_id,
            scope_id: taskData.scope_id,
            date_todo: taskData.date_todo,
            categorie_id: taskData.categorie_id,
            status_id: taskData.status_id,
            //date_finish: taskData.date_finish,
        }),
        headers: {"Content-Type": "application/json"}
    })
    .then(response => response.json())
    .then(responseJSON => {
        return responseJSON;
      })
      .catch(error => {return error;})
  };

  const remove = async (taskData) => {
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

      
export {
        getAll, create, update, remove
}




