'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_blog',{ useNewUrlParser: true})
.then(()=>{
    console.log('La conexion a la base de datos fue exitosa..');

    // Crear servidor y ponerme a escuchar peticiones HTTP
    app.listen(port, () => {
        console.log('Servidor corriendo en http://localhost:'+port);
    });
});