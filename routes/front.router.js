/*
Imports & configuration
*/
  // Class
  const express = require('express');
  const classRouter = express.Router({ mergeParams: true });
// 


/*
Class definition
*/
  class RouterClass {
    
    constructor(){}

    // Définition des routes
    routes(){
        classRouter.get('/', (req, res) => {
            res.render('index')
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