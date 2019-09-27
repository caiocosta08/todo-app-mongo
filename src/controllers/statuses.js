//import React, {useState} from 'react';
import {api_url} from '../config/database';
const controller = '/statuses';



    const getAll = async () => {
        let url = api_url + controller;
        
        return fetch(url)
        .then(response => response.json())
        .then(responseJSON => {
            return responseJSON;
          })
          .catch(error => {return error;})
          
      };

      const create = async (statusData) => {
        let url = api_url + controller + '/new';

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

      const update = async (statusData) => {
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

      const remove = async (statusData) => {
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

      
export {
        getAll, create, update, remove
}




