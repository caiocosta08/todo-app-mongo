//import React, {useState} from 'react';
import {api_url} from '../config/database';
const controller = '/scopes';



    const getAll = async () => {
        let url = api_url + controller;
        
        return fetch(url)
        .then(response => response.json())
        .then(responseJSON => {
            return responseJSON;
          })
          .catch(error => {return error;})
          
      };

      const create = async (scopeData) => {
        let url = api_url + controller + '/new';

        return fetch(url, {
            method: "POST",
            body: JSON.stringify({
                name: scopeData.name.toUpperCase(),
                description: scopeData.description.toUpperCase(),
            }),
            headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
        .then(responseJSON => {
            return responseJSON;
          })
          .catch(error => {return error;})
          
      };

      const update = async (scopeData) => {
        let url = api_url + controller + '/update';

        return fetch(url, {
            method: "POST",
            body: JSON.stringify({
                id: scopeData.id,
                name: scopeData.name.toUpperCase(),
                description: scopeData.description.toUpperCase(),
            }),
            headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
        .then(responseJSON => {
            return responseJSON;
          })
          .catch(error => {return error;})
      };

      const remove = async (scopeData) => {
        let url = api_url + controller + '/delete';

        return fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                id: scopeData.id
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




