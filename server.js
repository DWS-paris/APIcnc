/* 
Import
*/
    require('dotenv').config();
    const express = require('express');
    const path = require('path');
    const bodyParser = require('body-parser');
    const mongoDB = require('./db.connect');
//


/* 
Config
*/
    const server = express();
    const port = process.env.PORT    

    class ServerClass{
        init(){
            //=> Use path to add views
            server.set( 'view engine', 'ejs' );
            server.set( 'views', __dirname + '/www' );
            server.use( express.static(path.join(__dirname, 'www')) );

            //=> Body-parser
            server.use(bodyParser.json({limit: '10mb'}));
            server.use(bodyParser.urlencoded({ extended: true }));


            //=> Define API router
            const ApiRouterClass = require('./routes/api.router');
            const apiRouter = new ApiRouterClass();
            server.use('/api', apiRouter.init());

            

            //=> Define front router
            const FrontRouterClass = require('./routes/front.router');
            const frontRouter = new FrontRouterClass();
            server.use('/', frontRouter.init());

            // Start server
            this.launch()
        }

        launch(){
            // Connect MongoDB
            mongoDB.initClient()
            .then( mongooseResponse => {
                // Launch server
                server.listen(port, () => console.log({ database: mongooseResponse, server: `http://localhost:${port}` }))
            })
            .catch( mongooseError => console.log(mongooseError));
        }
    }
//


/* 
Start
*/
    new ServerClass().init();
//