/*
Imports & configuration
*/
  // Class
  const express = require('express');
  const classRouter = express.Router({ mergeParams: true });

  // Modules
  const model = require('../models/event.model');
// 


/*
Class definition
*/
  class RouterClass {
    
    constructor(){}

    // Définition des routes
    routes(){

        /* 
        Events
        */
        classRouter.get('/event', (req, res) => {
            return new Promise( (resolve, reject) => {
                model.find()
                .then( data => resolve(res.status(400).json(data)) )
                .catch( err => reject(res.status((501)).json({ message: 'Hello event', data: err})) )
            })
        });

        classRouter.post('/event', (req, res) => {
            return new Promise( (resolve, reject) => {
                model.create(req.body)
                .then( data => resolve(res.status(400).json({ message: 'Hello event', data: null})) )
                .catch( data => reject(res.status((501)).json({ message: 'Hello event', data: null})) )
            })
        });
    };

    // Initialize routes
    init(){
        this.routes();
        return classRouter;
    };
  };
//


/*
Export class
*/
    module.exports = RouterClass;
//