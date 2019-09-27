//import React, {useState} from 'react';
import {api_url} from '../config/database';
const controller = '/categories';

//class CategoriesController extends React.Component{
class CategoriesController{  /*
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

      create = async (categorieData) => {
        let url = api_url + controller + '/new';

        return fetch(url, {
            method: "POST",
            body: JSON.stringify({
                name: categorieData.name.toUpperCase(),
                description: categorieData.description.toUpperCase(),
            }),
            headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
        .then(responseJSON => {
            return responseJSON;
          })
          .catch(error => {return error;})
          
      };

      update = async (categorieData) => {
        let url = api_url + controller + '/update';

        return fetch(url, {
            method: "POST",
            body: JSON.stringify({
                id: categorieData.id,
                name: categorieData.name.toUpperCase(),
                description: categorieData.description.toUpperCase(),
            }),
            headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
        .then(responseJSON => {
            return responseJSON;
          })
          .catch(error => {return error;})
      };

      delete = async (categorieData) => {
        let url = api_url + controller + '/delete';

        return fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                id: categorieData.id
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

export default CategoriesController;
